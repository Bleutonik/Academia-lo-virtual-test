import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle, Clock, Send, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CourseData, Module } from "@/types/course";
import { useAuth } from "@/contexts/AuthContext";
import { useSprintReview } from "@/contexts/SprintReviewContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface SprintContentProps {
  course: CourseData;
  module: Module;
  onComplete: () => void;
}

const SprintContent = ({ course, module, onComplete }: SprintContentProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentUser, isAuthenticated } = useAuth();
  const {
    submitSprint,
    getSubmissionByUserAndSprint,
    isSprintApproved,
    isSprintPending,
    isSprintRejected
  } = useSprintReview();

  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const sprint = module.sprint;

  // Get existing submission if any
  const existingSubmission = currentUser
    ? getSubmissionByUserAndSprint(currentUser.id, course.id, module.id)
    : undefined;

  const approved = currentUser ? isSprintApproved(currentUser.id, course.id, module.id) : false;
  const pending = currentUser ? isSprintPending(currentUser.id, course.id, module.id) : false;
  const rejected = currentUser ? isSprintRejected(currentUser.id, course.id, module.id) : false;

  // Load existing answers if submission was rejected
  useEffect(() => {
    if (existingSubmission && rejected) {
      const loadedAnswers: { [key: string]: string } = {};
      existingSubmission.answers.forEach(a => {
        loadedAnswers[a.taskId] = a.answer;
      });
      setAnswers(loadedAnswers);
    }
  }, [existingSubmission, rejected]);

  const allAnswered = sprint.tasks.every(task => answers[task.id]?.trim().length > 0);

  const handleSubmit = () => {
    if (!isAuthenticated || !currentUser) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para enviar el sprint.",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }

    if (!allAnswered) {
      toast({
        title: "Respuestas incompletas",
        description: "Por favor responde todas las preguntas antes de enviar.",
        variant: "destructive"
      });
      return;
    }

    // Prepare answers array
    const answersArray = sprint.tasks.map(task => ({
      taskId: task.id,
      question: task.question,
      answer: answers[task.id]
    }));

    submitSprint({
      oddsId: course.id,
      oddsSlug: course.slug,
      moduleId: module.id,
      sprintId: sprint.id,
      userId: currentUser.id,
      userName: currentUser.fullName,
      courseName: course.title,
      moduleName: module.title,
      sprintTitle: sprint.title,
      answers: answersArray
    });

    toast({
      title: "Sprint enviado",
      description: "Tu sprint ha sido enviado para revisión. Recibirás retroalimentación pronto.",
    });
  };

  // Show approved state
  if (approved) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="text-center py-12">
          <CardContent>
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sprint Aprobado</h2>
            <p className="text-muted-foreground mb-2">
              Has completado todas las actividades prácticas de este módulo.
            </p>
            {existingSubmission?.feedback && (
              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg mt-4 max-w-md mx-auto">
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  Retroalimentación del instructor:
                </p>
                <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                  {existingSubmission.feedback}
                </p>
              </div>
            )}
            <Button onClick={onComplete} size="lg" className="mt-6">
              Continuar al Examen
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // Show pending state
  if (pending) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="text-center py-12">
          <CardContent>
            <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-amber-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sprint en Revisión</h2>
            <p className="text-muted-foreground mb-4">
              Tu sprint ha sido enviado y está siendo revisado por un instructor.
            </p>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Pendiente de aprobación
            </Badge>
            <p className="text-sm text-muted-foreground mt-6">
              Recibirás una notificación cuando tu sprint sea revisado.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Zap className="w-5 h-5" />
            <span className="font-medium">Sprint Práctico</span>
          </div>
          <CardTitle>{sprint.title}</CardTitle>
          <CardDescription>{sprint.description}</CardDescription>
        </CardHeader>
      </Card>

      {/* Rejected Warning */}
      {rejected && existingSubmission && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
            <CardContent className="py-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium text-red-700 dark:text-red-400">
                    Sprint rechazado - Correcciones necesarias
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-300 mt-1">
                    {existingSubmission.feedback}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Por favor revisa y corrige tus respuestas antes de volver a enviar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Login Warning */}
      {!isAuthenticated && (
        <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <div>
                <p className="font-medium text-amber-700 dark:text-amber-400">
                  Inicia sesión para enviar tu sprint
                </p>
                <p className="text-sm text-muted-foreground">
                  Necesitas una cuenta para que tu trabajo sea revisado y aprobado.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/login")}
                className="ml-auto"
              >
                Iniciar sesión
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tasks */}
      {sprint.tasks.map((task, index) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  {index + 1}
                </span>
                Actividad {index + 1}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Label className="text-base font-medium mb-4 block">
                {task.question}
              </Label>
              <Textarea
                placeholder="Escribe tu respuesta aquí... (Mínimo 50 caracteres para una respuesta completa)"
                className="min-h-[200px] mt-2"
                value={answers[task.id] || ''}
                onChange={(e) => setAnswers({
                  ...answers,
                  [task.id]: e.target.value
                })}
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">
                  {answers[task.id]?.length || 0} caracteres
                </span>
                {(answers[task.id]?.length || 0) < 50 && (
                  <span className="text-xs text-amber-500">
                    Recomendado: mínimo 50 caracteres
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={!allAnswered || !isAuthenticated}
          className={`bg-gradient-to-r ${course.color}`}
        >
          <Send className="w-4 h-4 mr-2" />
          {rejected ? 'Reenviar Sprint' : 'Enviar Sprint para Revisión'}
        </Button>
      </div>

      {/* Info Box */}
      <Card className="bg-muted/50">
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            <strong>Nota:</strong> Tu sprint será revisado por un instructor antes de ser aprobado.
            Asegúrate de proporcionar respuestas completas y detalladas. Una vez aprobado,
            podrás continuar con el examen del módulo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SprintContent;
