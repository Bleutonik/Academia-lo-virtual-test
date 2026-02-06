import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, BookOpen, ClipboardCheck, Settings, LogOut, Plus,
  Search, MoreVertical, CheckCircle, XCircle, Clock, Eye,
  UserPlus, Trash2, Edit, Shield, GraduationCap, User as UserIcon,
  BarChart3, TrendingUp, Download, FileSpreadsheet, Award, Target, Percent,
  Sun, Moon, FileQuestion, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/contexts/AuthContext";
import type { User } from "@/contexts/AuthContext";
import { useSprintReview } from "@/contexts/SprintReviewContext";
import type { SprintSubmission } from "@/contexts/SprintReviewContext";
import { coursesData } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { useExamResults } from "@/contexts/ExamResultsContext";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const { currentUser, users, logout, createUser, updateUser, deleteUser, getStudents, isAdmin, isLoading: authLoading, refreshUsers } = useAuth();
  const { examResults, refreshExamResults } = useExamResults();
  const { getPendingSubmissions, getAllSubmissions, approveSubmission, rejectSubmission, deleteSubmission, refreshSubmissions } = useSprintReview();

  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<SprintSubmission | null>(null);
  const [deleteConfirmUser, setDeleteConfirmUser] = useState<User | null>(null);
  const [deleteConfirmSubmission, setDeleteConfirmSubmission] = useState<SprintSubmission | null>(null);
  const [reviewFeedback, setReviewFeedback] = useState("");
  const [expandedExamId, setExpandedExamId] = useState<number | null>(null);
  const [analyticsData, setAnalyticsData] = useState<{
    courseStats: Array<{
      courseId: string;
      courseName: string;
      totalStudents: number;
      completedStudents: number;
      avgProgress: number;
    }>;
    studentProgress: Array<{
      range: string;
      count: number;
    }>;
    recentCertificates: number;
  }>({
    courseStats: [],
    studentProgress: [],
    recentCertificates: 0
  });

  // Form states
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    role: "student" as "admin" | "student",
    assignedCourses: [] as string[],
    isActive: true
  });

  // Memoize refresh function
  const loadDashboardData = useCallback(async () => {
    if (isAdmin) {
      await Promise.all([refreshSubmissions(), refreshUsers(), refreshExamResults()]);
    }
  }, [isAdmin, refreshSubmissions, refreshUsers, refreshExamResults]);

  // Calculate analytics data based on submissions and course assignments
  const calculateAnalytics = useCallback(() => {
    if (!isAdmin) return;

    // Get data directly from context functions
    const currentStudents = getStudents() || [];
    const currentSubmissions = getAllSubmissions() || [];

    // Skip if no data available yet
    if (currentStudents.length === 0 && currentSubmissions.length === 0) {
      return;
    }

    // Group approved submissions by course to estimate completions
    const approvedByStudentCourse: Record<string, Record<string, Set<string>>> = {};

    currentSubmissions.filter(s => s.status === 'approved').forEach(sub => {
      const key = `${sub.userId}`;
      if (!approvedByStudentCourse[key]) {
        approvedByStudentCourse[key] = {};
      }
      if (!approvedByStudentCourse[key][sub.courseId]) {
        approvedByStudentCourse[key][sub.courseId] = new Set();
      }
      approvedByStudentCourse[key][sub.courseId].add(sub.moduleId);
    });

    // Calculate course statistics
    const courseStats = coursesData.map(course => {
      const studentsWithCourse = currentStudents.filter(s => s.assignedCourses.includes(course.id));
      const totalStudents = studentsWithCourse.length;
      const totalModules = course.modules.length;

      let completedStudents = 0;
      let totalProgress = 0;

      studentsWithCourse.forEach(student => {
        const studentKey = `${student.id}`;
        const completedModules = approvedByStudentCourse[studentKey]?.[course.id]?.size || 0;
        const progressPercent = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
        totalProgress += progressPercent;

        if (completedModules >= totalModules) {
          completedStudents++;
        }
      });

      return {
        courseId: course.id,
        courseName: course.title,
        totalStudents,
        completedStudents,
        avgProgress: totalStudents > 0 ? Math.round(totalProgress / totalStudents) : 0
      };
    });

    // Calculate student progress distribution
    const progressRanges = [
      { range: '0-25%', min: 0, max: 25, count: 0 },
      { range: '26-50%', min: 26, max: 50, count: 0 },
      { range: '51-75%', min: 51, max: 75, count: 0 },
      { range: '76-99%', min: 76, max: 99, count: 0 },
      { range: '100%', min: 100, max: 100, count: 0 }
    ];

    currentStudents.forEach(student => {
      const studentKey = `${student.id}`;
      let totalCourseProgress = 0;
      let coursesCount = 0;

      student.assignedCourses.forEach(courseId => {
        const course = coursesData.find(c => c.id === courseId);
        if (!course) return;

        const totalModules = course.modules.length;
        const completedModules = approvedByStudentCourse[studentKey]?.[courseId]?.size || 0;
        const progressPercent = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
        totalCourseProgress += progressPercent;
        coursesCount++;
      });

      const avgProgress = coursesCount > 0 ? totalCourseProgress / coursesCount : 0;

      for (const range of progressRanges) {
        if (avgProgress >= range.min && avgProgress <= range.max) {
          range.count++;
          break;
        }
      }
    });

    // Count recent certificates
    const now = new Date();
    const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const recentCertificates = currentSubmissions.filter(
      s => s.status === 'approved' && new Date(s.reviewedAt || s.submittedAt) > monthAgo
    ).length;

    setAnalyticsData({
      courseStats,
      studentProgress: progressRanges.map(r => ({ range: r.range, count: r.count })),
      recentCertificates
    });
  }, [isAdmin, getStudents, getAllSubmissions]);

  // Redirect if not admin
  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate("/login", { replace: true });
    }
  }, [isAdmin, navigate, authLoading]);

  // Refresh data when dashboard loads or user navigates here
  useEffect(() => {
    loadDashboardData();
  }, [location.key, loadDashboardData]);

  // Load analytics when tab changes to analytics
  useEffect(() => {
    if (activeTab === 'analytics') {
      calculateAnalytics();
    }
  }, [activeTab, calculateAnalytics]);

  if (authLoading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const pendingSubmissions = getPendingSubmissions();
  const allSubmissions = getAllSubmissions();
  const students = getStudents();

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateUser = async () => {
    if (!newUser.username || !newUser.password || !newUser.fullName || !newUser.email) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    const result = await createUser(newUser);
    if (result.success) {
      toast({
        title: "Usuario creado",
        description: `El usuario ${newUser.username} ha sido creado exitosamente.`,
      });
      setIsCreateUserOpen(false);
      setNewUser({
        username: "",
        password: "",
        fullName: "",
        email: "",
        role: "student",
        assignedCourses: [],
        isActive: true
      });
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive"
      });
    }
  };

  const handleUpdateUser = async () => {
    if (!selectedUser) return;

    const result = await updateUser(selectedUser.id, selectedUser);
    if (result.success) {
      toast({
        title: "Usuario actualizado",
        description: `El usuario ha sido actualizado exitosamente.`,
      });
      setIsEditUserOpen(false);
      setSelectedUser(null);
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive"
      });
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteConfirmUser) return;

    const result = await deleteUser(deleteConfirmUser.id);
    if (result.success) {
      toast({
        title: "Usuario eliminado",
        description: `El usuario ha sido eliminado.`,
      });
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive"
      });
    }
    setDeleteConfirmUser(null);
  };

  const handleApprove = async () => {
    if (!selectedSubmission || !currentUser) return;

    try {
      await approveSubmission(selectedSubmission.id, currentUser.id, reviewFeedback || "Aprobado. Buen trabajo!");
      toast({
        title: "Sprint aprobado",
        description: "El estudiante ha sido notificado de la aprobación.",
      });
      setIsReviewOpen(false);
      setSelectedSubmission(null);
      setReviewFeedback("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al aprobar el sprint",
        variant: "destructive"
      });
    }
  };

  const handleReject = async () => {
    if (!selectedSubmission || !currentUser || !reviewFeedback.trim()) {
      toast({
        title: "Error",
        description: "Debes proporcionar retroalimentación al rechazar.",
        variant: "destructive"
      });
      return;
    }

    try {
      await rejectSubmission(selectedSubmission.id, currentUser.id, reviewFeedback);
      toast({
        title: "Sprint rechazado",
        description: "El estudiante deberá corregir y volver a enviar.",
      });
      setIsReviewOpen(false);
      setSelectedSubmission(null);
      setReviewFeedback("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al rechazar el sprint",
        variant: "destructive"
      });
    }
  };

  const handleDeleteSubmission = async () => {
    if (!deleteConfirmSubmission) return;

    try {
      await deleteSubmission(deleteConfirmSubmission.id);
      toast({
        title: "Sprint eliminado",
        description: "El sprint ha sido eliminado exitosamente.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al eliminar el sprint",
        variant: "destructive"
      });
    }
    setDeleteConfirmSubmission(null);
  };

  // Export functions
  const exportStudentsCSV = () => {
    const headers = ['Nombre', 'Usuario', 'Email', 'Rol', 'Estado', 'Cursos Asignados'];
    const rows = students.map(student => [
      student.fullName,
      student.username,
      student.email,
      student.role,
      student.isActive ? 'Activo' : 'Inactivo',
      student.assignedCourses.map(id => coursesData.find(c => c.id === id)?.title || id).join('; ')
    ]);

    downloadCSV(headers, rows, 'estudiantes_academia.csv');
  };

  const exportSubmissionsCSV = () => {
    const headers = ['Estudiante', 'Curso', 'Módulo', 'Estado', 'Fecha Envío', 'Fecha Revisión', 'Retroalimentación'];
    const rows = allSubmissions.map(sub => [
      sub.userName,
      sub.courseName,
      sub.moduleName,
      sub.status === 'approved' ? 'Aprobado' : sub.status === 'rejected' ? 'Rechazado' : 'Pendiente',
      new Date(sub.submittedAt).toLocaleDateString('es-ES'),
      sub.reviewedAt ? new Date(sub.reviewedAt).toLocaleDateString('es-ES') : '',
      sub.feedback || ''
    ]);

    downloadCSV(headers, rows, 'sprints_academia.csv');
  };

  const exportAnalyticsCSV = () => {
    const headers = ['Curso', 'Estudiantes Total', 'Completaron', 'Progreso Promedio (%)'];
    const rows = analyticsData.courseStats.map(stat => [
      stat.courseName,
      stat.totalStudents.toString(),
      stat.completedStudents.toString(),
      stat.avgProgress.toString()
    ]);

    downloadCSV(headers, rows, 'analytics_cursos.csv');
  };

  const downloadCSV = (headers: string[], rows: string[][], filename: string) => {
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);

    toast({
      title: "Descarga iniciada",
      description: `El archivo ${filename} se está descargando.`,
    });
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Panel de Administración</h1>
              <p className="text-white/70 text-sm">Academia LoVirtual</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80 text-sm hidden md:block">
              Hola, {currentUser?.fullName}
            </span>
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Resumen</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="exams" className="flex items-center gap-2">
              <FileQuestion className="w-4 h-4" />
              <span className="hidden sm:inline">Exámenes</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Usuarios</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2 relative">
              <ClipboardCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Revisiones</span>
              {pendingSubmissions.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                  {pendingSubmissions.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Cursos</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Estudiantes
                    </CardTitle>
                    <Users className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{students.length}</p>
                    <p className="text-xs text-muted-foreground">Usuarios registrados</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Sprints Pendientes
                    </CardTitle>
                    <Clock className="w-4 h-4 text-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-amber-500">{pendingSubmissions.length}</p>
                    <p className="text-xs text-muted-foreground">Por revisar</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Sprints Aprobados
                    </CardTitle>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-green-500">
                      {allSubmissions.filter(s => s.status === 'approved').length}
                    </p>
                    <p className="text-xs text-muted-foreground">Total aprobados</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Cursos Activos
                    </CardTitle>
                    <BookOpen className="w-4 h-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{coursesData.length}</p>
                    <p className="text-xs text-muted-foreground">Cursos disponibles</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recent Pending Reviews */}
            {pendingSubmissions.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    Sprints Pendientes de Revisión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingSubmissions.slice(0, 5).map((submission) => (
                      <div
                        key={submission.id}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{submission.userName}</p>
                          <p className="text-sm text-muted-foreground">
                            {submission.courseName} - {submission.moduleName}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedSubmission(submission);
                            setIsReviewOpen(true);
                          }}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Revisar
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="space-y-6">
              {/* KPIs Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Tasa de Completación</p>
                          <p className="text-3xl font-bold text-blue-600">
                            {students.length > 0
                              ? Math.round(
                                  (analyticsData.courseStats.reduce((acc, s) => acc + s.completedStudents, 0) /
                                    Math.max(analyticsData.courseStats.reduce((acc, s) => acc + s.totalStudents, 0), 1)) * 100
                                )
                              : 0}%
                          </p>
                        </div>
                        <Target className="w-10 h-10 text-blue-500 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Sprints Aprobados</p>
                          <p className="text-3xl font-bold text-green-600">
                            {allSubmissions.length > 0
                              ? Math.round((allSubmissions.filter(s => s.status === 'approved').length / allSubmissions.length) * 100)
                              : 0}%
                          </p>
                        </div>
                        <CheckCircle className="w-10 h-10 text-green-500 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Certificados Totales</p>
                          <p className="text-3xl font-bold text-purple-600">
                            {analyticsData.courseStats.reduce((acc, s) => acc + s.completedStudents, 0)}
                          </p>
                        </div>
                        <Award className="w-10 h-10 text-purple-500 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Progreso Promedio</p>
                          <p className="text-3xl font-bold text-orange-600">
                            {analyticsData.courseStats.length > 0
                              ? Math.round(
                                  analyticsData.courseStats.reduce((acc, s) => acc + s.avgProgress, 0) /
                                  analyticsData.courseStats.length
                                )
                              : 0}%
                          </p>
                        </div>
                        <TrendingUp className="w-10 h-10 text-orange-500 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Course Progress Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Progreso por Curso
                    </CardTitle>
                    <CardDescription>Progreso promedio de estudiantes por curso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.courseStats.map((stat, index) => (
                        <div key={stat.courseId} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium truncate max-w-[200px]">{stat.courseName}</span>
                            <span className="text-muted-foreground">{stat.avgProgress}%</span>
                          </div>
                          <div className="h-4 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${stat.avgProgress}%` }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                              className={`h-full rounded-full ${
                                index % 5 === 0 ? 'bg-blue-500' :
                                index % 5 === 1 ? 'bg-green-500' :
                                index % 5 === 2 ? 'bg-purple-500' :
                                index % 5 === 3 ? 'bg-orange-500' : 'bg-pink-500'
                              }`}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{stat.completedStudents} de {stat.totalStudents} completaron</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Student Distribution Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Percent className="w-5 h-5" />
                      Distribución de Progreso
                    </CardTitle>
                    <CardDescription>Cantidad de estudiantes por rango de progreso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.studentProgress.map((range, index) => {
                        const maxCount = Math.max(...analyticsData.studentProgress.map(r => r.count), 1);
                        const percentage = (range.count / maxCount) * 100;

                        return (
                          <div key={range.range} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium">{range.range}</span>
                              <span className="text-muted-foreground">{range.count} estudiantes</span>
                            </div>
                            <div className="h-6 bg-muted rounded-full overflow-hidden flex items-center">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`h-full rounded-full ${
                                  index === 4 ? 'bg-green-500' :
                                  index === 3 ? 'bg-blue-500' :
                                  index === 2 ? 'bg-yellow-500' :
                                  index === 1 ? 'bg-orange-500' : 'bg-red-500'
                                }`}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sprint Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas de Sprints</CardTitle>
                  <CardDescription>Resumen de entregas de sprints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                      <p className="text-2xl font-bold text-amber-600">{pendingSubmissions.length}</p>
                      <p className="text-sm text-muted-foreground">Pendientes</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                      <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <p className="text-2xl font-bold text-green-600">
                        {allSubmissions.filter(s => s.status === 'approved').length}
                      </p>
                      <p className="text-sm text-muted-foreground">Aprobados</p>
                    </div>
                    <div className="text-center p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
                      <XCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
                      <p className="text-2xl font-bold text-red-600">
                        {allSubmissions.filter(s => s.status === 'rejected').length}
                      </p>
                      <p className="text-sm text-muted-foreground">Rechazados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Export Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Descargar Reportes
                  </CardTitle>
                  <CardDescription>Exporta datos en formato CSV para análisis externo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto py-4 flex flex-col items-center gap-2"
                      onClick={exportStudentsCSV}
                    >
                      <Users className="w-6 h-6 text-blue-500" />
                      <span className="font-medium">Lista de Estudiantes</span>
                      <span className="text-xs text-muted-foreground">Datos de usuarios</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-4 flex flex-col items-center gap-2"
                      onClick={exportSubmissionsCSV}
                    >
                      <ClipboardCheck className="w-6 h-6 text-green-500" />
                      <span className="font-medium">Sprints Enviados</span>
                      <span className="text-xs text-muted-foreground">Historial de entregas</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-4 flex flex-col items-center gap-2"
                      onClick={exportAnalyticsCSV}
                    >
                      <FileSpreadsheet className="w-6 h-6 text-purple-500" />
                      <span className="font-medium">Analytics de Cursos</span>
                      <span className="text-xs text-muted-foreground">Métricas por curso</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Exams Tab */}
          <TabsContent value="exams">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileQuestion className="w-5 h-5" />
                      Resultados de Exámenes
                    </CardTitle>
                    <CardDescription>
                      Historial de respuestas de exámenes de los estudiantes
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{examResults.filter(e => e.passed).length} aprobados</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span>{examResults.filter(e => !e.passed).length} reprobados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {examResults.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <FileQuestion className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No hay resultados de exámenes aún</p>
                    <p className="text-sm">Los resultados aparecerán cuando los estudiantes completen exámenes</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {examResults
                      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
                      .map((result) => (
                      <Card key={result.id} className={`border-l-4 ${result.passed ? 'border-l-green-500' : 'border-l-red-500'}`}>
                        <CardContent className="py-4">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                                result.passed
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                  : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                              }`}>
                                {result.score}%
                              </div>
                              <div>
                                <p className="font-semibold">{result.userName}</p>
                                <p className="text-sm text-muted-foreground">
                                  {result.courseName} - {result.moduleName}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(result.submittedAt).toLocaleString('es-ES')}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right text-sm">
                                <p className={result.passed ? 'text-green-600' : 'text-red-600'}>
                                  {result.passed ? 'Aprobado' : 'Reprobado'}
                                </p>
                                <p className="text-muted-foreground">
                                  {result.correctAnswers}/{result.totalQuestions} correctas
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setExpandedExamId(expandedExamId === result.id ? null : result.id)}
                              >
                                <ChevronDown className={`w-5 h-5 transition-transform ${
                                  expandedExamId === result.id ? 'rotate-180' : ''
                                }`} />
                              </Button>
                            </div>
                          </div>

                          {/* Expanded Details */}
                          {expandedExamId === result.id && result.answers && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-4 pt-4 border-t space-y-3"
                            >
                              <h4 className="font-semibold text-sm">Detalle de respuestas:</h4>
                              {result.answers.map((answer, idx) => (
                                <div
                                  key={answer.questionId}
                                  className={`p-3 rounded-lg ${
                                    answer.isCorrect
                                      ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800'
                                      : 'bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800'
                                  }`}
                                >
                                  <div className="flex items-start gap-2">
                                    {answer.isCorrect ? (
                                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    ) : (
                                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    <div className="flex-1">
                                      <p className="font-medium text-sm">{idx + 1}. {answer.question}</p>
                                      <p className="text-sm mt-1">
                                        <span className="text-muted-foreground">Respondió: </span>
                                        <span className={answer.isCorrect ? 'text-green-600' : 'text-red-600'}>
                                          {answer.options[answer.selectedOption]}
                                        </span>
                                      </p>
                                      {!answer.isCorrect && (
                                        <p className="text-sm text-green-600 dark:text-green-400">
                                          Correcta: {answer.options[answer.correctOption]}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle>Gestión de Usuarios</CardTitle>
                    <CardDescription>
                      Crea y administra las cuentas de estudiantes
                    </CardDescription>
                  </div>
                  <Dialog open={isCreateUserOpen} onOpenChange={setIsCreateUserOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <UserPlus className="w-4 h-4 mr-2" />
                        Crear Usuario
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Crear Nuevo Usuario</DialogTitle>
                        <DialogDescription>
                          Ingresa los datos del nuevo estudiante
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="new-username">Usuario</Label>
                            <Input
                              id="new-username"
                              placeholder="usuario123"
                              value={newUser.username}
                              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-password">Contraseña</Label>
                            <Input
                              id="new-password"
                              type="text"
                              placeholder="contraseña"
                              value={newUser.password}
                              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-fullname">Nombre Completo</Label>
                          <Input
                            id="new-fullname"
                            placeholder="Juan Pérez"
                            value={newUser.fullName}
                            onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-email">Email</Label>
                          <Input
                            id="new-email"
                            type="email"
                            placeholder="juan@email.com"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Rol</Label>
                          <Select
                            value={newUser.role}
                            onValueChange={(value: "admin" | "student") =>
                              setNewUser({ ...newUser, role: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un rol" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">Estudiante</SelectItem>
                              <SelectItem value="admin">Administrador</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Cursos Asignados</Label>
                          <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto border rounded-md p-2">
                            {coursesData.map((course) => (
                              <label
                                key={course.id}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={newUser.assignedCourses.includes(course.id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setNewUser({
                                        ...newUser,
                                        assignedCourses: [...newUser.assignedCourses, course.id]
                                      });
                                    } else {
                                      setNewUser({
                                        ...newUser,
                                        assignedCourses: newUser.assignedCourses.filter(id => id !== course.id)
                                      });
                                    }
                                  }}
                                  className="rounded"
                                />
                                <span className="text-sm">{course.title}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsCreateUserOpen(false)}>
                          Cancelar
                        </Button>
                        <Button onClick={handleCreateUser}>
                          Crear Usuario
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar usuarios..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            user.role === 'admin' ? 'bg-primary/20 text-primary' : 'bg-muted'
                          }`}>
                            {user.role === 'admin' ? (
                              <Shield className="w-5 h-5" />
                            ) : (
                              <UserIcon className="w-5 h-5" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{user.fullName}</p>
                              <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                                {user.role === 'admin' ? 'Admin' : 'Estudiante'}
                              </Badge>
                              {!user.isActive && (
                                <Badge variant="destructive">Inactivo</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              @{user.username} · {user.email}
                            </p>
                            {user.role === 'student' && user.assignedCourses.length > 0 && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {user.assignedCourses.length} curso(s) asignado(s)
                              </p>
                            )}
                          </div>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedUser({ ...user });
                                setIsEditUserOpen(true);
                              }}
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Editar
                            </DropdownMenuItem>
                            {user.username !== 'admin' && (
                              <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => setDeleteConfirmUser(user)}
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Eliminar
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Revisión de Sprints</CardTitle>
                <CardDescription>
                  Revisa y aprueba las entregas de los estudiantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pending">
                  <TabsList className="mb-4">
                    <TabsTrigger value="pending" className="relative">
                      Pendientes
                      {pendingSubmissions.length > 0 && (
                        <Badge className="ml-2 bg-amber-500">{pendingSubmissions.length}</Badge>
                      )}
                    </TabsTrigger>
                    <TabsTrigger value="approved">Aprobados</TabsTrigger>
                    <TabsTrigger value="rejected">Rechazados</TabsTrigger>
                    <TabsTrigger value="all">Todos</TabsTrigger>
                  </TabsList>

                  <TabsContent value="pending">
                    <ScrollArea className="h-[400px]">
                      {pendingSubmissions.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                          <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                          <p>No hay sprints pendientes de revisión</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {pendingSubmissions.map((submission) => (
                            <SubmissionCard
                              key={submission.id}
                              submission={submission}
                              onReview={() => {
                                setSelectedSubmission(submission);
                                setIsReviewOpen(true);
                              }}
                              onDelete={() => setDeleteConfirmSubmission(submission)}
                            />
                          ))}
                        </div>
                      )}
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="approved">
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {allSubmissions.filter(s => s.status === 'approved').map((submission) => (
                          <SubmissionCard
                            key={submission.id}
                            submission={submission}
                            onReview={() => {
                              setSelectedSubmission(submission);
                              setIsReviewOpen(true);
                            }}
                            onDelete={() => setDeleteConfirmSubmission(submission)}
                          />
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="rejected">
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {allSubmissions.filter(s => s.status === 'rejected').map((submission) => (
                          <SubmissionCard
                            key={submission.id}
                            submission={submission}
                            onReview={() => {
                              setSelectedSubmission(submission);
                              setIsReviewOpen(true);
                            }}
                            onDelete={() => setDeleteConfirmSubmission(submission)}
                          />
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="all">
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {allSubmissions.map((submission) => (
                          <SubmissionCard
                            key={submission.id}
                            submission={submission}
                            onReview={() => {
                              setSelectedSubmission(submission);
                              setIsReviewOpen(true);
                            }}
                            onDelete={() => setDeleteConfirmSubmission(submission)}
                          />
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Cursos Disponibles</CardTitle>
                <CardDescription>
                  Lista de cursos activos en la plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coursesData.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                      <CardContent className="pt-4">
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {course.modules.length} módulos · {course.duration}
                        </p>
                        <div className="mt-3">
                          <p className="text-xs text-muted-foreground">
                            Estudiantes asignados: {
                              students.filter(s => s.assignedCourses.includes(course.id)).length
                            }
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Edit User Dialog */}
      <Dialog open={isEditUserOpen} onOpenChange={setIsEditUserOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Editar Usuario</DialogTitle>
            <DialogDescription>
              Modifica los datos del usuario
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Usuario</Label>
                  <Input
                    value={selectedUser.username}
                    onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
                    disabled={selectedUser.username === 'admin'}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Contraseña</Label>
                  <Input
                    type="text"
                    value={selectedUser.password}
                    onChange={(e) => setSelectedUser({ ...selectedUser, password: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Nombre Completo</Label>
                <Input
                  value={selectedUser.fullName}
                  onChange={(e) => setSelectedUser({ ...selectedUser, fullName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={selectedUser.email}
                  onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="edit-active"
                  checked={selectedUser.isActive}
                  onChange={(e) => setSelectedUser({ ...selectedUser, isActive: e.target.checked })}
                  className="rounded"
                />
                <Label htmlFor="edit-active">Usuario activo</Label>
              </div>
              {selectedUser.role === 'student' && (
                <div className="space-y-2">
                  <Label>Cursos Asignados</Label>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto border rounded-md p-2">
                    {coursesData.map((course) => (
                      <label
                        key={course.id}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedUser.assignedCourses.includes(course.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedUser({
                                ...selectedUser,
                                assignedCourses: [...selectedUser.assignedCourses, course.id]
                              });
                            } else {
                              setSelectedUser({
                                ...selectedUser,
                                assignedCourses: selectedUser.assignedCourses.filter(id => id !== course.id)
                              });
                            }
                          }}
                          className="rounded"
                        />
                        <span className="text-sm">{course.title}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditUserOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleUpdateUser}>
              Guardar Cambios
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Review Dialog */}
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle>Revisar Sprint</DialogTitle>
            <DialogDescription>
              {selectedSubmission?.userName} - {selectedSubmission?.courseName}
            </DialogDescription>
          </DialogHeader>

          {selectedSubmission && (
            <div className="flex-1 overflow-y-auto px-6 py-4 scroll-smooth">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant={
                    selectedSubmission.status === 'approved' ? 'default' :
                    selectedSubmission.status === 'rejected' ? 'destructive' : 'secondary'
                  }>
                    {selectedSubmission.status === 'approved' ? 'Aprobado' :
                     selectedSubmission.status === 'rejected' ? 'Rechazado' : 'Pendiente'}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Enviado: {new Date(selectedSubmission.submittedAt).toLocaleString()}
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">{selectedSubmission.sprintTitle}</h4>
                  {selectedSubmission.answers.map((answer, index) => (
                    <Card key={answer.taskId}>
                      <CardContent className="pt-4">
                        <p className="font-medium text-sm mb-2">
                          Pregunta {index + 1}: {answer.question}
                        </p>
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-sm whitespace-pre-wrap">{answer.answer}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Attachments Section */}
                {selectedSubmission.attachments && selectedSubmission.attachments.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Archivos Adjuntos ({selectedSubmission.attachments.length})</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedSubmission.attachments.map((file, index) => (
                        <a
                          key={index}
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                        >
                          {file.mimetype.startsWith('image/') ? (
                            <img src={file.url} alt={file.originalName} className="w-10 h-10 object-cover rounded" />
                          ) : (
                            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                              <Eye className="w-5 h-5 text-primary" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{file.originalName}</p>
                            <p className="text-xs text-muted-foreground">
                              {(file.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSubmission.status === 'pending' && (
                  <div className="space-y-2">
                    <Label>Retroalimentación</Label>
                    <Textarea
                      placeholder="Escribe tu retroalimentación para el estudiante..."
                      value={reviewFeedback}
                      onChange={(e) => setReviewFeedback(e.target.value)}
                      rows={4}
                    />
                  </div>
                )}

                {selectedSubmission.feedback && selectedSubmission.status !== 'pending' && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Retroalimentación:</p>
                    <p className="text-sm">{selectedSubmission.feedback}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <DialogFooter className="px-6 py-4 border-t">
            {selectedSubmission?.status === 'pending' && (
              <>
                <Button variant="outline" onClick={() => setIsReviewOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleReject}
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Rechazar
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleApprove}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Aprobar
                </Button>
              </>
            )}
            {selectedSubmission?.status !== 'pending' && (
              <Button onClick={() => setIsReviewOpen(false)}>
                Cerrar
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete User Confirmation */}
      <AlertDialog open={!!deleteConfirmUser} onOpenChange={() => setDeleteConfirmUser(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar usuario?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Se eliminará permanentemente al usuario{' '}
              <strong>{deleteConfirmUser?.fullName}</strong> y todos sus datos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteUser}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Submission Confirmation */}
      <AlertDialog open={!!deleteConfirmSubmission} onOpenChange={() => setDeleteConfirmSubmission(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar sprint?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Se eliminará permanentemente el sprint de{' '}
              <strong>{deleteConfirmSubmission?.userName}</strong> del módulo{' '}
              <strong>{deleteConfirmSubmission?.moduleName}</strong>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteSubmission}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

// Submission Card Component
const SubmissionCard = ({
  submission,
  onReview,
  onDelete
}: {
  submission: SprintSubmission;
  onReview: () => void;
  onDelete: () => void;
}) => (
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
        submission.status === 'approved' ? 'bg-green-100 text-green-600' :
        submission.status === 'rejected' ? 'bg-red-100 text-red-600' :
        'bg-amber-100 text-amber-600'
      }`}>
        {submission.status === 'approved' ? <CheckCircle className="w-5 h-5" /> :
         submission.status === 'rejected' ? <XCircle className="w-5 h-5" /> :
         <Clock className="w-5 h-5" />}
      </div>
      <div>
        <p className="font-medium">{submission.userName}</p>
        <p className="text-sm text-muted-foreground">
          {submission.courseName} - {submission.moduleName}
        </p>
        <p className="text-xs text-muted-foreground">
          {new Date(submission.submittedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Button size="sm" variant="outline" onClick={onReview}>
        <Eye className="w-4 h-4 mr-1" />
        Ver
      </Button>
      <Button size="sm" variant="destructive" onClick={onDelete}>
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

export default AdminDashboard;
