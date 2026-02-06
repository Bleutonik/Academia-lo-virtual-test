import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight, ChevronLeft, BookOpen, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { CourseData, Module } from "@/types/course";
import { useProgress } from "@/contexts/ProgressContext";
import ReactMarkdown from 'react-markdown';

interface TheoryContentProps {
  course: CourseData;
  module: Module;
  onComplete: () => void;
}

const TheoryContent = ({ course, module, onComplete }: TheoryContentProps) => {
  const { markLessonComplete, isLessonComplete } = useProgress();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const currentLesson = module.theory[currentLessonIndex];
  const allLessonsComplete = module.theory.every(lesson =>
    isLessonComplete(course.id, module.id, lesson.id)
  );

  const handleMarkComplete = () => {
    markLessonComplete(course.id, module.id, currentLesson.id);

    if (currentLessonIndex < module.theory.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const completedCount = module.theory.filter(lesson =>
    isLessonComplete(course.id, module.id, lesson.id)
  ).length;

  const progressPercentage = (completedCount / module.theory.length) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar - Lesson List */}
      <div className="lg:col-span-4 xl:col-span-3">
        <div className="sticky top-24">
          <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-b from-card to-card/80">
            {/* Header con progreso */}
            <div className="p-5 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold">Contenido</span>
                </div>
                <span className="text-sm font-medium text-primary">
                  {completedCount}/{module.theory.length}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {progressPercentage === 100 ? "¡Completado!" : `${Math.round(progressPercentage)}% completado`}
              </p>
            </div>

            {/* Lista de lecciones */}
            <ScrollArea className="h-[400px]">
              <div className="p-2">
                {module.theory.map((lesson, index) => {
                  const isComplete = isLessonComplete(course.id, module.id, lesson.id);
                  const isCurrent = index === currentLessonIndex;

                  return (
                    <motion.button
                      key={lesson.id}
                      onClick={() => setCurrentLessonIndex(index)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full p-3 mb-1 flex items-center gap-3 text-left rounded-xl transition-all duration-200 ${
                        isCurrent
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'hover:bg-muted/80'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isComplete
                          ? isCurrent
                            ? 'bg-white/20'
                            : 'bg-green-500/10 text-green-500'
                          : isCurrent
                          ? 'bg-white/20'
                          : 'bg-muted'
                      }`}>
                        {isComplete ? (
                          <CheckCircle className={`w-5 h-5 ${isCurrent ? 'text-white' : 'text-green-500'}`} />
                        ) : (
                          <span className={`text-sm font-semibold ${isCurrent ? 'text-white' : 'text-muted-foreground'}`}>
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm font-medium block truncate ${
                          isCurrent ? 'text-white' : ''
                        }`}>
                          {lesson.title}
                        </span>
                        {isComplete && !isCurrent && (
                          <span className="text-xs text-green-500">Completada</span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </ScrollArea>
          </Card>

          {/* Botón continuar */}
          <AnimatePresence>
            {allLessonsComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4"
              >
                <Button
                  onClick={onComplete}
                  className="w-full h-12 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Continuar al Sprint
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-8 xl:col-span-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLessonIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              {/* Header de la lección */}
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-8 py-6 border-b">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur">
                    <BookOpen className="w-4 h-4" />
                    <span>Lección {currentLessonIndex + 1} de {module.theory.length}</span>
                  </div>
                  {isLessonComplete(course.id, module.id, currentLesson.id) && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Completada</span>
                    </div>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {currentLesson.title}
                </h1>
              </div>

              {/* Contenido */}
              <CardContent className="p-8 md:p-10 lg:p-12">
                <article className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                  prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b
                  prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-base prose-p:leading-8 prose-p:mb-6 prose-p:text-muted-foreground
                  prose-li:text-base prose-li:leading-7 prose-li:mb-2
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-ol:my-6 prose-ol:space-y-2
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:bg-muted/50 prose-blockquote:rounded-r-lg prose-blockquote:italic
                  prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
                  prose-pre:bg-muted prose-pre:rounded-xl prose-pre:p-6
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-xl prose-img:shadow-lg
                ">
                  <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
                </article>

                {/* Navegación */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setCurrentLessonIndex(Math.max(0, currentLessonIndex - 1))}
                    disabled={currentLessonIndex === 0}
                    className="w-full sm:w-auto"
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Anterior
                  </Button>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    {!isLessonComplete(course.id, module.id, currentLesson.id) && (
                      <Button
                        onClick={handleMarkComplete}
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 w-full sm:w-auto"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Completar lección
                      </Button>
                    )}

                    {currentLessonIndex < module.theory.length - 1 && (
                      <Button
                        variant={isLessonComplete(course.id, module.id, currentLesson.id) ? "default" : "outline"}
                        size="lg"
                        onClick={() => setCurrentLessonIndex(currentLessonIndex + 1)}
                        className="w-full sm:w-auto"
                      >
                        Siguiente
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TheoryContent;
