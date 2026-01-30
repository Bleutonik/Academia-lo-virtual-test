import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import api, { User as ApiUser, CreateUserData } from '@/services/api';

export interface User {
  id: number;
  username: string;
  password?: string;
  fullName: string;
  email: string;
  role: 'admin' | 'student';
  assignedCourses: string[];
  createdAt: string;
  isActive: boolean;
}

interface AuthContextType {
  currentUser: User | null;
  users: User[];
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  createUser: (userData: Omit<User, 'id' | 'createdAt'>) => Promise<{ success: boolean; message: string }>;
  updateUser: (userId: number, userData: Partial<User>) => Promise<{ success: boolean; message: string }>;
  deleteUser: (userId: number) => Promise<{ success: boolean; message: string }>;
  getUserById: (userId: number) => User | undefined;
  getStudents: () => User[];
  refreshUsers: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing token on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = api.getToken();
      if (token) {
        try {
          const user = await api.getCurrentUser();
          setCurrentUser(user as User);
        } catch (error) {
          console.error('Auth check failed:', error);
          api.logout();
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Load users if admin
  useEffect(() => {
    if (currentUser?.role === 'admin') {
      refreshUsers();
    }
  }, [currentUser]);

  const refreshUsers = useCallback(async () => {
    try {
      const fetchedUsers = await api.getUsers();
      setUsers(fetchedUsers as User[]);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      const data = await api.login(username, password);
      setCurrentUser(data.user as User);
      return { success: true, message: 'Inicio de sesión exitoso' };
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : 'Error de autenticación' };
    }
  };

  const logout = () => {
    api.logout();
    setCurrentUser(null);
    setUsers([]);
  };

  const createUser = async (userData: Omit<User, 'id' | 'createdAt'>): Promise<{ success: boolean; message: string }> => {
    try {
      const createData: CreateUserData = {
        username: userData.username,
        password: userData.password || '',
        fullName: userData.fullName,
        email: userData.email,
        role: userData.role,
        assignedCourses: userData.assignedCourses,
        isActive: userData.isActive
      };
      await api.createUser(createData);
      await refreshUsers();
      return { success: true, message: 'Usuario creado exitosamente' };
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : 'Error al crear usuario' };
    }
  };

  const updateUser = async (userId: number, userData: Partial<User>): Promise<{ success: boolean; message: string }> => {
    try {
      await api.updateUser(userId, userData);
      await refreshUsers();

      // Update current user if it's the same
      if (currentUser?.id === userId) {
        const updatedUser = await api.getCurrentUser();
        setCurrentUser(updatedUser as User);
      }

      return { success: true, message: 'Usuario actualizado exitosamente' };
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : 'Error al actualizar usuario' };
    }
  };

  const deleteUser = async (userId: number): Promise<{ success: boolean; message: string }> => {
    try {
      await api.deleteUser(userId);
      await refreshUsers();
      return { success: true, message: 'Usuario eliminado exitosamente' };
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : 'Error al eliminar usuario' };
    }
  };

  const getUserById = (userId: number): User | undefined => {
    return users.find(u => u.id === userId);
  };

  const getStudents = (): User[] => {
    return users.filter(u => u.role === 'student');
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      users,
      isAuthenticated: !!currentUser,
      isAdmin: currentUser?.role === 'admin',
      isLoading,
      login,
      logout,
      createUser,
      updateUser,
      deleteUser,
      getUserById,
      getStudents,
      refreshUsers
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
