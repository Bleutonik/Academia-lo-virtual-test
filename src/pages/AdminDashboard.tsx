import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, BookOpen, ClipboardCheck, Settings, LogOut, Plus,
  Search, MoreVertical, CheckCircle, XCircle, Clock, Eye,
  UserPlus, Trash2, Edit, Shield, GraduationCap, User as UserIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentUser, users, logout, createUser, updateUser, deleteUser, getStudents, isAdmin, isLoading: authLoading, refreshUsers } = useAuth();
  const { getPendingSubmissions, getAllSubmissions, approveSubmission, rejectSubmission, refreshSubmissions } = useSprintReview();

  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<SprintSubmission | null>(null);
  const [deleteConfirmUser, setDeleteConfirmUser] = useState<User | null>(null);
  const [reviewFeedback, setReviewFeedback] = useState("");

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

  // Redirect if not admin
  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate("/login", { replace: true });
    }
  }, [isAdmin, navigate, authLoading]);

  // Refresh data when dashboard loads
  useEffect(() => {
    if (isAdmin) {
      refreshSubmissions();
      refreshUsers();
    }
  }, [isAdmin]);

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
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Resumen</span>
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

      {/* Delete Confirmation */}
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
    </div>
  );
};

// Submission Card Component
const SubmissionCard = ({
  submission,
  onReview
}: {
  submission: SprintSubmission;
  onReview: () => void;
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
    <Button size="sm" variant="outline" onClick={onReview}>
      <Eye className="w-4 h-4 mr-1" />
      Ver
    </Button>
  </div>
);

export default AdminDashboard;
