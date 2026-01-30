import { useEffect, useCallback } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen, LogOut, Award, Clock, CheckCircle, XCircle,
  ChevronRight, GraduationCap, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { useSprintReview } from "@/contexts/SprintReviewContext";
import { coursesData } from "@/data/courses";
import * as Icons from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout, isAuthenticated, isLoading: authLoading } = useAuth();
  const { getCourseProgress, isCourseComplete, hasCertificate, refreshProgress } = useProgress();
  const { getSubmissionsByUser, refreshSubmissions } = useSprintReview();

  // Memoize refresh function
  const loadDashboardData = useCallback(async () => {
    if (isAuthenticated && currentUser) {
      await Promise.all([refreshProgress(), refreshSubmissions()]);
    }
  }, [isAuthenticated, currentUser, refreshProgress, refreshSubmissions]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && (!isAuthenticated || !currentUser)) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, currentUser, navigate, authLoading]);

  // Refresh data when dashboard loads or user navigates here
  useEffect(() => {
    loadDashboardData();
  }, [location.key, loadDashboardData]);

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
