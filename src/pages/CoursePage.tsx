import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, CheckCircle, Lock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCourseBySlug } from "@/data/courses";
import { useProgress } from "@/contexts/ProgressContext";
import * as Icons from "lucide-react";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = getCourseBySlug(slug || "");
  const { isModuleComplete, getCourseProgress, isCourseComplete, hasCertificate } = useProgress();

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

  const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  const moduleIds = course.modules.map(m => m.id);
  const progressPercent = getCourseProgress(course.id, moduleIds);
  const courseCompleted = isCourseComplete(course.id, moduleIds);
  const hasCert = hasCertificate(course.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`bg-gradient-to-r ${course.color} py-12 px-4`}>
        <div className="container max-w-5xl mx-auto">
          <Button
            variant="ghost"
            className="text-white mb-6 hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
              {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {course.title}
              </h1>
              <p className="text-white/90 text-lg mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white border-none">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </Badge>
                <Badge className="bg-white/20 text-white border-none">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {course.modules.length} Módulos
                </Badge>
                {courseCompleted && (
                  <Badge className="bg-green-500 text-white border-none">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Completado
                  </Badge>
                )}
              </div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-white/90 text-sm mb-2">
              <span>Progreso del curso</span>
              <span>{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-3 bg-white/20" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-5xl mx-auto py-12 px-4">
        {/* Certificate Banner */}
        {courseCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-yellow-500 to-amber-500 border-none">
              <CardContent className="py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Award className="w-12 h-12 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {hasCert ? "Certificado Obtenido" : "Curso Completado"}
                      </h3>
                      <p className="text-white/90">
                        {hasCert
                          ? "Descarga tu certificado de finalización"
                          : "Obtén tu certificado de finalización"}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="bg-white text-amber-600 hover:bg-white/90"
                    onClick={() => navigate(`/curso/${slug}/certificado`)}
                  >
                    {hasCert ? "Ver Certificado" : "Obtener Certificado"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Modules List */}
        <h2 className="text-2xl font-bold mb-6">Módulos del Curso</h2>
        <div className="space-y-4">
          {course.modules.map((module, index) => {
            const moduleComplete = isModuleComplete(course.id, module.id);
            const previousModuleComplete = index === 0 || isModuleComplete(course.id, course.modules[index - 1].id);
            const isLocked = index > 0 && !previousModuleComplete;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`transition-all ${isLocked ? 'opacity-60' : 'hover:shadow-lg'}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          moduleComplete
                            ? 'bg-green-500 text-white'
                            : isLocked
                            ? 'bg-muted text-muted-foreground'
                            : `bg-gradient-to-r ${course.color} text-white`
                        }`}>
                          {moduleComplete ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : isLocked ? (
                            <Lock className="w-5 h-5" />
                          ) : (
                            <span className="font-bold">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                      </div>
                      {!isLocked && (
                        <Button
                          asChild
                          variant={moduleComplete ? "outline" : "default"}
                          className={!moduleComplete ? `bg-gradient-to-r ${course.color} border-none` : ''}
                        >
                          <Link to={`/curso/${slug}/modulo/${module.id}`}>
                            {moduleComplete ? "Revisar" : "Comenzar"}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-muted-foreground ml-14">
                      <span>{module.theory.length} lecciones</span>
                      <span>1 sprint</span>
                      <span>1 examen</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
