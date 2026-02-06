import { useState } from "react";
import { motion } from "framer-motion";
import { FileCheck, CheckCircle, XCircle, RotateCcw, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CourseData, Module } from "@/types/course";
import { useProgress } from "@/contexts/ProgressContext";
import { useExamResults } from "@/contexts/ExamResultsContext";
import { useNavigate } from "react-router-dom";

interface ExamContentProps {
  course: CourseData;
  module: Module;
}

const ExamContent = ({ course, module }: ExamContentProps) => {
  const navigate = useNavigate();
  const { markExamComplete, isExamComplete, getExamScore, isModuleComplete } = useProgress();
  const { submitExamResult } = useExamResults();
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const exam = module.exam;
  const allAnswered = exam.questions.every(q => answers[q.id] !== undefined);
  const alreadyCompleted = isExamComplete(course.id, module.id);
  const previousScore = getExamScore(course.id, module.id);

  const handleSubmit = async () => {
    let correct = 0;
    const examAnswers = exam.questions.map(question => {
      const isCorrect = answers[question.id] === question.correctAnswer;
      if (isCorrect) correct++;

      return {
        questionId: question.id,
        question: question.question,
        selectedOption: answers[question.id],
        correctOption: question.correctAnswer,
        options: question.options,
        isCorrect
      };
    });

    const calculatedScore = Math.round((correct / exam.questions.length) * 100);
    const hasPassed = calculatedScore >= exam.passingScore;

    setScore(calculatedScore);
    setPassed(hasPassed);
    setSubmitted(true);
    setIsRetrying(false);

    // Save to progress context
    markExamComplete(course.id, module.id, calculatedScore, hasPassed);

    // Submit detailed exam results
    await submitExamResult({
      courseId: course.id,
      courseName: course.title,
      moduleId: module.id,
      moduleName: module.title,
      examTitle: exam.title,
      score: calculatedScore,
      passed: hasPassed,
      totalQuestions: exam.questions.length,
      correctAnswers: correct,
      answers: examAnswers
    });
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setPassed(false);
    setIsRetrying(true);
  };

  if (alreadyCompleted && !submitted && !isRetrying) {
    const moduleDone = isModuleComplete(course.id, module.id);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="text-center py-12">
          <CardContent>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              moduleDone ? 'bg-green-100 dark:bg-green-900' : 'bg-amber-100 dark:bg-amber-900'
            }`}>
              {moduleDone ? (
                <Award className="w-10 h-10 text-green-500" />
              ) : (
                <FileCheck className="w-10 h-10 text-amber-500" />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {moduleDone ? "Examen Aprobado" : "Examen Completado"}
            </h2>
            <p className="text-4xl font-bold text-primary mb-2">{previousScore}%</p>
            <p className="text-muted-foreground mb-6">
              {moduleDone
                ? "Has aprobado este examen exitosamente."
                : `Necesitas ${exam.passingScore}% para aprobar. Puedes intentarlo de nuevo.`}
            </p>
            <div className="flex gap-4 justify-center">
              {!moduleDone && (
                <Button onClick={handleRetry} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reintentar
                </Button>
              )}
              <Button onClick={() => navigate(`/curso/${course.slug}`)}>
                Volver al curso
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="text-center py-12">
          <CardContent>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              passed ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
            }`}>
              {passed ? (
                <CheckCircle className="w-10 h-10 text-green-500" />
              ) : (
                <XCircle className="w-10 h-10 text-red-500" />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {passed ? "Felicidades" : "Sigue intentando"}
            </h2>
            <p className="text-4xl font-bold text-primary mb-2">{score}%</p>
            <p className="text-muted-foreground mb-2">
              {passed
                ? "Has aprobado el examen exitosamente."
                : `No alcanzaste el puntaje mínimo de ${exam.passingScore}%.`}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Respondiste correctamente {Math.round((score / 100) * exam.questions.length)} de {exam.questions.length} preguntas
            </p>

            {/* Show answers review */}
            <div className="text-left mt-8 space-y-4">
              <h3 className="font-semibold text-lg">Revisión de respuestas:</h3>
              {exam.questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;

                return (
                  <Card key={question.id} className={`${
                    isCorrect ? 'border-green-500' : 'border-red-500'
                  }`}>
                    <CardContent className="py-4">
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium">{index + 1}. {question.question}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Tu respuesta: {question.options[userAnswer]}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                              Respuesta correcta: {question.options[question.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex gap-4 justify-center mt-8">
              {!passed && (
                <Button onClick={handleRetry} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reintentar
                </Button>
              )}
              <Button onClick={() => navigate(`/curso/${course.slug}`)}>
                Volver al curso
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 text-primary mb-2">
            <FileCheck className="w-5 h-5" />
            <span className="font-medium">Examen Final del Módulo</span>
          </div>
          <CardTitle>{exam.title}</CardTitle>
          <CardDescription>
            Responde todas las preguntas. Necesitas {exam.passingScore}% para aprobar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{exam.questions.length} preguntas</span>
            <span>
              Respondidas: {Object.keys(answers).length}/{exam.questions.length}
            </span>
          </div>
          <Progress
            value={(Object.keys(answers).length / exam.questions.length) * 100}
            className="mt-2"
          />
        </CardContent>
      </Card>

      {exam.questions.map((question, index) => (
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {index + 1}. {question.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[question.id]?.toString()}
                onValueChange={(value) => setAnswers({
                  ...answers,
                  [question.id]: parseInt(value)
                })}
              >
                {question.options.map((option, optIndex) => (
                  <div
                    key={optIndex}
                    className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                      answers[question.id] === optIndex
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:bg-muted/50'
                    }`}
                  >
                    <RadioGroupItem value={optIndex.toString()} id={`${question.id}-${optIndex}`} />
                    <Label
                      htmlFor={`${question.id}-${optIndex}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <div className="flex justify-end pt-4">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`bg-gradient-to-r ${course.color}`}
        >
          <FileCheck className="w-4 h-4 mr-2" />
          Enviar Examen
        </Button>
      </div>
    </div>
  );
};

export default ExamContent;
