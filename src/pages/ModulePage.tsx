import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Zap, FileCheck, CheckCircle, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCourseBySlug } from "@/data/courses";
import { useProgress } from "@/contexts/ProgressContext";
import { useSprintReview } from "@/contexts/SprintReviewContext";
import { useAuth } from "@/contexts/AuthContext";
import TheoryContent from "@/components/course/TheoryContent";
import SprintContent from "@/components/course/SprintContent";
import ExamContent from "@/components/course/ExamContent";

const ModulePage = () => {
  const { slug, moduleId } = useParams<{ slug: string; moduleId: string }>();
  const navigate = useNavigate();
  const course = getCourseBySlug(slug || "");
  const { isLessonComplete, isExamComplete, getExamScore, isModuleComplete } = useProgress();
  const { isSprintApproved, isSprintPending } = useSprintReview();
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("teoria");

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Curso no encontrado</h1>
          <Button asChild>
            <Link to="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const module = course.modules.find(m => m.id === moduleId);
  const moduleIndex = course.modules.findIndex(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Módulo no encontrado</h1>
          <Button asChild>
            <Link to={`/curso/${slug}`}>Volver al curso</Link>
          </Button>
        </div>
      </div>
    );
  }

  const allLessonsComplete = module.theory.every(lesson =>
    isLessonComplete(course.id, module.id, lesson.id)
  );
  // Sprint approval now requires admin review
  const sprintApproved = currentUser
    ? isSprintApproved(currentUser.id, course.id, module.id)
    : false;
  const sprintPending = currentUser
    ? isSprintPending(currentUser.id, course.id, module.id)
    : false;
  const examComplete = isExamComplete(course.id, module.id);
  const examScore = getExamScore(course.id, module.id);
  const moduleComplete = isModuleComplete(course.id, module.id);

  const nextModule = course.modules[moduleIndex + 1];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`bg-gradient-to-r ${course.color} py-8 px-4`}>
        <div className="container max-w-5xl mx-auto">
          <Button
            variant="ghost"
            className="text-white mb-4 hover:bg-white/20"
            onClick={() => navigate(`/curso/${slug}`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al curso
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-white/20 text-white border-none mb-2">
              Módulo {moduleIndex + 1} de {course.modules.length}
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {module.title}
            </h1>
            <p className="text-white/90">{module.description}</p>

            {/* Module Progress Indicators */}
            <div className="flex gap-4 mt-6">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                allLessonsComplete ? 'bg-green-500/20 text-green-100' : 'bg-white/10 text-white/70'
              }`}>
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Teoría {allLessonsComplete && '✓'}</span>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                sprintApproved ? 'bg-green-500/20 text-green-100' :
                sprintPending ? 'bg-amber-500/20 text-amber-100' :
                'bg-white/10 text-white/70'
              }`}>
                {sprintPending ? <Clock className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                <span className="text-sm">
                  Sprint {sprintApproved ? '✓' : sprintPending ? '⏳' : ''}
                </span>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                examComplete ? 'bg-green-500/20 text-green-100' : 'bg-white/10 text-white/70'
              }`}>
                <FileCheck className="w-4 h-4" />
                <span className="text-sm">
                  Examen {examComplete && `(${examScore}%)`}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-5xl mx-auto py-8 px-4">
        {moduleComplete && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CardContent className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <div>
                      <h3 className="font-semibold text-green-700 dark:text-green-300">
                        Módulo Completado
                      </h3>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Has completado todas las secciones de este módulo
                      </p>
                    </div>
                  </div>
                  {nextModule ? (
                    <Button
                      onClick={() => navigate(`/curso/${slug}/modulo/${nextModule.id}`)}
                      className={`bg-gradient-to-r ${course.color}`}
                    >
                      Siguiente módulo
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => navigate(`/curso/${slug}`)}
                      className={`bg-gradient-to-r ${course.color}`}
                    >
                      Ver certificado
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="teoria" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Teoría
              {allLessonsComplete && <CheckCircle className="w-4 h-4 text-green-500" />}
            </TabsTrigger>
            <TabsTrigger
              value="sprint"
              className="flex items-center gap-2"
              disabled={!allLessonsComplete}
            >
              <Zap className="w-4 h-4" />
              Sprint
              {sprintApproved && <CheckCircle className="w-4 h-4 text-green-500" />}
              {sprintPending && <Clock className="w-4 h-4 text-amber-500" />}
            </TabsTrigger>
            <TabsTrigger
              value="examen"
              className="flex items-center gap-2"
              disabled={!sprintApproved}
            >
              <FileCheck className="w-4 h-4" />
              Examen
              {examComplete && <CheckCircle className="w-4 h-4 text-green-500" />}
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="teoria" className="mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <TheoryContent
                  course={course}
                  module={module}
                  onComplete={() => setActiveTab("sprint")}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="sprint" className="mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <SprintContent
                  course={course}
                  module={module}
                  onComplete={() => setActiveTab("examen")}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="examen" className="mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <ExamContent
                  course={course}
                  module={module}
                />
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </main>
    </div>
  );
};

export default ModulePage;
