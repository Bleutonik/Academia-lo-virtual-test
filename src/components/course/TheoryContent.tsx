import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar - Lesson List */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              <span>Lecciones</span>
              <span className="text-muted-foreground">
                {completedCount}/{module.theory.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              {module.theory.map((lesson, index) => {
                const isComplete = isLessonComplete(course.id, module.id, lesson.id);
                const isCurrent = index === currentLessonIndex;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLessonIndex(index)}
                    className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors border-l-2 ${
                      isCurrent
                        ? 'bg-primary/10 border-primary'
                        : 'border-transparent hover:bg-muted'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isComplete
                        ? 'bg-green-500 text-white'
                        : isCurrent
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {isComplete ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </div>
                    <span className={`text-sm truncate ${
                      isCurrent ? 'font-medium' : ''
                    }`}>
                      {lesson.title}
                    </span>
                  </button>
                );
              })}
            </ScrollArea>
          </CardContent>
        </Card>

        {allLessonsComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <Button onClick={onComplete} className="w-full">
              Continuar al Sprint
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        )}
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <BookOpen className="w-4 h-4" />
              Lección {currentLessonIndex + 1} de {module.theory.length}
            </div>
            <CardTitle>{currentLesson.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={() => setCurrentLessonIndex(Math.max(0, currentLessonIndex - 1))}
                disabled={currentLessonIndex === 0}
              >
                Anterior
              </Button>

              <div className="flex gap-2">
                {!isLessonComplete(course.id, module.id, currentLesson.id) && (
                  <Button onClick={handleMarkComplete}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Marcar como completada
                  </Button>
                )}

                {currentLessonIndex < module.theory.length - 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentLessonIndex(currentLessonIndex + 1)}
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TheoryContent;
