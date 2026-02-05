import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, LogOut, Award, Clock, CheckCircle, XCircle,
  ChevronRight, GraduationCap, User, Lightbulb, Target,
  ChevronDown, FileText, Zap, ClipboardCheck, TrendingUp, BarChart3,
  Sun, Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { useSprintReview } from "@/contexts/SprintReviewContext";
import { useToast } from "@/hooks/use-toast";
import { coursesData } from "@/data/courses";
import { useTheme } from "@/contexts/ThemeContext";
import * as Icons from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const { currentUser, logout, isAuthenticated, isLoading: authLoading } = useAuth();
  const { getCourseProgress, isCourseComplete, hasCertificate, refreshProgress, isModuleComplete, isLessonComplete, isSprintComplete, isExamPassed } = useProgress();
  const { getSubmissionsByUser, refreshSubmissions, submissions } = useSprintReview();
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [expandedCourseProgress, setExpandedCourseProgress] = useState<string | null>(null);
  const [showDetailedProgress, setShowDetailedProgress] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && (!isAuthenticated || !currentUser)) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, currentUser, navigate, authLoading]);

  // Refresh data every time the component mounts or becomes visible
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      if (isAuthenticated && currentUser) {
        setIsRefreshing(true);
        try {
          await refreshProgress();
          await refreshSubmissions();
        } catch (error) {
          console.error('Error refreshing data:', error);
        }
        if (isMounted) {
          setIsRefreshing(false);
        }
      }
    };

    // Load data on mount
    loadData();

    // Also refresh when page becomes visible (user returns to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadData();
      }
    };

    // Refresh when window gains focus
    const handleFocus = () => {
      loadData();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      isMounted = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [isAuthenticated, currentUser]); // Re-run if auth changes

  // Welcome toast - show only once per session
  useEffect(() => {
    if (isAuthenticated && currentUser && !hasShownWelcome && !authLoading) {
      const timer = setTimeout(() => {
        toast({
          title: "¡Bienvenido!",
          description: `Hola ${currentUser.fullName.split(' ')[0]}, acceso exitoso.`,
        });
        setHasShownWelcome(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, currentUser, hasShownWelcome, authLoading, toast]);

  if (authLoading || !isAuthenticated || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Get user's assigned courses
  const assignedCourses = currentUser.assignedCourses && currentUser.assignedCourses.length > 0
    ? coursesData.filter(course => currentUser.assignedCourses.includes(course.id))
    : coursesData; // Si no tiene cursos asignados, mostrar todos

  const userSubmissions = getSubmissionsByUser(currentUser.id);
  const pendingSubmissions = userSubmissions.filter(s => s.status === 'pending');
  const approvedSubmissions = userSubmissions.filter(s => s.status === 'approved');
  const rejectedSubmissions = userSubmissions.filter(s => s.status === 'rejected');

  // Tips del día rotativos
  const tips = [
    "La clave del éxito es la consistencia. Dedica al menos 30 minutos diarios a tu capacitación y verás resultados extraordinarios.",
    "La comunicación proactiva es tu mejor herramienta. Mantén a tu cliente informado antes de que pregunte.",
    "Organiza tu día la noche anterior. Los AVs más exitosos planifican sus tareas con anticipación.",
    "Aprende una herramienta nueva cada semana. La versatilidad te hace más valioso.",
    "Tu reputación se construye con cada tarea completada. Trata cada proyecto como si fuera el más importante.",
    "El feedback negativo es una oportunidad de mejora. Agradécelo y actúa sobre él.",
    "Establece límites claros desde el inicio. Un AV profesional sabe decir no cuando es necesario."
  ];
  const tipOfTheDay = tips[new Date().getDay()];

  // Encontrar el próximo paso del estudiante
  const getNextStep = () => {
    for (const course of assignedCourses) {
      const progress = getCourseProgress(course.id, course.modules.map(m => m.id));
      if (progress < 100) {
        for (const module of course.modules) {
          const moduleComplete = isCourseComplete(course.id, [module.id]);
          if (!moduleComplete) {
            return {
              courseSlug: course.slug,
              courseName: course.title,
              moduleId: module.id,
              moduleName: module.title,
              lessonNumber: 1
            };
          }
        }
      }
    }
    return null;
  };
  const nextStep = getNextStep();

  // Calcular estadísticas de progreso detallado
  const getDetailedStats = () => {
    let totalLessons = 0;
    let completedLessons = 0;
    let totalSprints = 0;
    let completedSprints = 0;
    let totalExams = 0;
    let passedExams = 0;

    for (const course of assignedCourses) {
      for (const module of course.modules) {
        // Contar lecciones
        if (module.theory) {
          totalLessons += module.theory.length;
          for (const lesson of module.theory) {
            if (isLessonComplete(course.id, module.id, lesson.id)) {
              completedLessons++;
            }
          }
        }
        // Contar sprints
        if (module.sprint) {
          totalSprints++;
          if (isSprintComplete(course.id, module.id)) {
            completedSprints++;
          }
        }
        // Contar exámenes
        if (module.exam) {
          totalExams++;
          if (isExamPassed(course.id, module.id)) {
            passedExams++;
          }
        }
      }
    }

    return { totalLessons, completedLessons, totalSprints, completedSprints, totalExams, passedExams };
  };

  const detailedStats = getDetailedStats();

  // Obtener detalles de progreso por módulo
  const getModuleDetails = (course: typeof assignedCourses[0], module: typeof assignedCourses[0]['modules'][0]) => {
    const lessonsCompleted = module.theory
      ? module.theory.filter(l => isLessonComplete(course.id, module.id, l.id)).length
      : 0;
    const totalLessonsInModule = module.theory?.length || 0;
    const sprintDone = module.sprint ? isSprintComplete(course.id, module.id) : null;
    const examDone = module.exam ? isExamPassed(course.id, module.id) : null;

    return { lessonsCompleted, totalLessonsInModule, sprintDone, examDone };
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary py-4 px-6 sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Academia LoVirtual</h1>
              <p className="text-white/70 text-sm">Panel de Estudiante</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-white/80">
              <User className="w-4 h-4" />
              <span className="text-sm">{currentUser.fullName}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto py-8 px-4">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-2">
            Hola, {currentUser.fullName.split(' ')[0]}
          </h2>
          <p className="text-muted-foreground">
            Continúa tu formación como Asistente Virtual profesional
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{assignedCourses.length}</p>
                    <p className="text-sm text-muted-foreground">Cursos asignados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{pendingSubmissions.length}</p>
                    <p className="text-sm text-muted-foreground">Sprints en revisión</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{approvedSubmissions.length}</p>
                    <p className="text-sm text-muted-foreground">Sprints aprobados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {assignedCourses.filter(c =>
                        isCourseComplete(c.id, c.modules.map(m => m.id))
                      ).length}
                    </p>
                    <p className="text-sm text-muted-foreground">Cursos completados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Progreso Detallado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8"
        >
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Mi Progreso Detallado</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetailedProgress(!showDetailedProgress)}
                  className="text-primary"
                >
                  {showDetailedProgress ? "Ocultar detalles" : "Ver detalles"}
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showDetailedProgress ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Resumen General */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-muted-foreground">Lecciones</span>
                  </div>
                  <p className="text-lg font-bold text-blue-600">
                    {detailedStats.completedLessons}/{detailedStats.totalLessons}
                  </p>
                  <Progress
                    value={(detailedStats.completedLessons / (detailedStats.totalLessons || 1)) * 100}
                    className="h-1 mt-2"
                  />
                </div>
                <div className="text-center p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span className="text-xs text-muted-foreground">Sprints</span>
                  </div>
                  <p className="text-lg font-bold text-orange-600">
                    {detailedStats.completedSprints}/{detailedStats.totalSprints}
                  </p>
                  <Progress
                    value={(detailedStats.completedSprints / (detailedStats.totalSprints || 1)) * 100}
                    className="h-1 mt-2"
                  />
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <ClipboardCheck className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-muted-foreground">Exámenes</span>
                  </div>
                  <p className="text-lg font-bold text-green-600">
                    {detailedStats.passedExams}/{detailedStats.totalExams}
                  </p>
                  <Progress
                    value={(detailedStats.passedExams / (detailedStats.totalExams || 1)) * 100}
                    className="h-1 mt-2"
                  />
                </div>
              </div>

              {/* Detalles por curso */}
              <AnimatePresence>
                {showDetailedProgress && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 pt-4 border-t"
                  >
                    {assignedCourses.map((course) => {
                      const courseProgress = getCourseProgress(course.id, course.modules.map(m => m.id));
                      const isExpanded = expandedCourseProgress === course.id;

                      return (
                        <div key={course.id} className="border rounded-lg overflow-hidden">
                          <button
                            onClick={() => setExpandedCourseProgress(isExpanded ? null : course.id)}
                            className="w-full flex items-center justify-between p-3 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                                {(() => {
                                  const IconComp = Icons[course.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                                  return IconComp ? <IconComp className="w-4 h-4 text-white" /> : null;
                                })()}
                              </div>
                              <div className="text-left">
                                <p className="font-medium text-sm">{course.title}</p>
                                <p className="text-xs text-muted-foreground">{course.modules.length} módulos</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <p className="font-bold text-sm">{courseProgress}%</p>
                              </div>
                              <div className="w-24">
                                <Progress value={courseProgress} className="h-2" />
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </div>
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t bg-muted/30"
                              >
                                <div className="p-3 space-y-2">
                                  {course.modules.map((module, idx) => {
                                    const details = getModuleDetails(course, module);
                                    const moduleComplete = isModuleComplete(course.id, module.id);

                                    return (
                                      <div key={module.id} className="flex items-center gap-3 p-2 bg-background rounded-lg">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                          moduleComplete
                                            ? 'bg-green-500 text-white'
                                            : 'bg-muted text-muted-foreground'
                                        }`}>
                                          {moduleComplete ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <p className="text-sm font-medium truncate">{module.title}</p>
                                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                              <FileText className="w-3 h-3" />
                                              {details.lessonsCompleted}/{details.totalLessonsInModule}
                                            </span>
                                            {details.sprintDone !== null && (
                                              <span className={`flex items-center gap-1 ${details.sprintDone ? 'text-green-600' : ''}`}>
                                                <Zap className="w-3 h-3" />
                                                {details.sprintDone ? 'Completado' : 'Pendiente'}
                                              </span>
                                            )}
                                            {details.examDone !== null && (
                                              <span className={`flex items-center gap-1 ${details.examDone ? 'text-green-600' : ''}`}>
                                                <ClipboardCheck className="w-3 h-3" />
                                                {details.examDone ? 'Aprobado' : 'Pendiente'}
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                        {moduleComplete && (
                                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tip del día y Tu próximo paso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Tip del día</h3>
                    <p className="text-sm text-muted-foreground italic">
                      "{tipOfTheDay}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary mb-2">Tu próximo paso</h3>
                    {nextStep ? (
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Continúa con <span className="font-medium text-foreground">{nextStep.moduleName}</span> y avanza hacia tu meta.
                        </p>
                        <Button size="sm" asChild className="ml-2 flex-shrink-0">
                          <Link to={`/curso/${nextStep.courseSlug}`}>
                            Continuar
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        ¡Felicidades! Has completado todos tus cursos asignados.
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Rejected Submissions Alert */}
        {rejectedSubmissions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-red-700 dark:text-red-400">
                  <XCircle className="w-5 h-5" />
                  Sprints que requieren corrección
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {rejectedSubmissions.map((submission) => (
                    <div
                      key={submission.id}
                      className="flex items-center justify-between p-3 bg-white dark:bg-background rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{submission.moduleName}</p>
                        <p className="text-sm text-muted-foreground">{submission.courseName}</p>
                        {submission.feedback && (
                          <p className="text-sm text-red-600 mt-1">
                            Retroalimentación: {submission.feedback}
                          </p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        asChild
                      >
                        <Link to={`/curso/${submission.oddsSlug}/modulo/${submission.moduleId}`}>
                          Corregir
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Courses Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Mis Cursos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignedCourses.map((course, index) => {
              const moduleIds = course.modules.map(m => m.id);
              const progress = getCourseProgress(course.id, moduleIds);
              const completed = isCourseComplete(course.id, moduleIds);
              const hasCert = hasCertificate(course.id);
              const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                          {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                        </div>
                        {completed && (
                          <Badge className="bg-green-500">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completado
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="mt-4">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progreso</span>
                            <span className="font-medium">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{course.modules.length} módulos</span>
                          <span>{course.duration}</span>
                        </div>

                        <Button
                          className={`w-full bg-gradient-to-r ${course.color}`}
                          asChild
                        >
                          <Link to={`/curso/${course.slug}`}>
                            {completed ? (
                              hasCert ? "Ver certificado" : "Obtener certificado"
                            ) : progress > 0 ? "Continuar" : "Comenzar"}
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        {userSubmissions.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
              <CardDescription>Tus últimas entregas de sprints</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {userSubmissions.slice(0, 10).map((submission) => (
                    <div
                      key={submission.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          submission.status === 'approved' ? 'bg-green-100 text-green-600' :
                          submission.status === 'rejected' ? 'bg-red-100 text-red-600' :
                          'bg-amber-100 text-amber-600'
                        }`}>
                          {submission.status === 'approved' ? <CheckCircle className="w-4 h-4" /> :
                           submission.status === 'rejected' ? <XCircle className="w-4 h-4" /> :
                           <Clock className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{submission.moduleName}</p>
                          <p className="text-xs text-muted-foreground">{submission.courseName}</p>
                        </div>
                      </div>
                      <Badge variant={
                        submission.status === 'approved' ? 'default' :
                        submission.status === 'rejected' ? 'destructive' : 'secondary'
                      }>
                        {submission.status === 'approved' ? 'Aprobado' :
                         submission.status === 'rejected' ? 'Rechazado' : 'En revisión'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
