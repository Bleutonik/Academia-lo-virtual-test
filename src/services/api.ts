const API_URL = 'https://academia-lo-virtual-test-production.up.railway.app';

class ApiService {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('auth_token');
  }

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  getToken() {
    return this.token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Error en el servidor' }));
      throw new Error(error.error || 'Error en la solicitud');
    }

    return response.json();
  }

  // Auth
  async login(username: string, password: string) {
    const data = await this.request<{ token: string; user: User }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    this.setToken(data.token);
    return data;
  }

  async getCurrentUser() {
    return this.request<User>('/api/auth/me');
  }

  logout() {
    this.setToken(null);
  }

  // Users
  async getUsers() {
    return this.request<User[]>('/api/users');
  }

  async createUser(userData: CreateUserData) {
    return this.request<User>('/api/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(userId: number, userData: Partial<User>) {
    return this.request<User>(`/api/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(userId: number) {
    return this.request<{ message: string }>(`/api/users/${userId}`, {
      method: 'DELETE',
    });
  }

  // Progress
  async getProgress() {
    return this.request<Progress>('/api/progress');
  }

  async updateLessonProgress(courseId: string, moduleId: string, lessonId: string) {
    return this.request<{ success: boolean }>('/api/progress/lesson', {
      method: 'POST',
      body: JSON.stringify({ courseId, moduleId, lessonId }),
    });
  }

  async updateExamProgress(courseId: string, moduleId: string, score: number, passed: boolean) {
    return this.request<{ success: boolean }>('/api/progress/exam', {
      method: 'POST',
      body: JSON.stringify({ courseId, moduleId, score, passed }),
    });
  }

  async updateSprintProgress(courseId: string, moduleId: string, completed: boolean) {
    return this.request<{ success: boolean }>('/api/progress/sprint', {
      method: 'POST',
      body: JSON.stringify({ courseId, moduleId, completed }),
    });
  }

  // File Upload
  async uploadFiles(files: File[]): Promise<UploadedFile[]> {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    const response = await fetch(`${API_URL}/api/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Error al subir archivos' }));
      throw new Error(error.error || 'Error al subir archivos');
    }

    const data = await response.json();
    return data.files;
  }

  // Submissions
  async submitSprint(data: SubmitSprintData) {
    return this.request<{ id: number; message: string }>('/api/submissions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getMySubmissions() {
    return this.request<SprintSubmission[]>('/api/submissions/me');
  }

  async getAllSubmissions() {
    return this.request<SprintSubmission[]>('/api/submissions');
  }

  async getPendingSubmissions() {
    return this.request<SprintSubmission[]>('/api/submissions/pending');
  }

  async reviewSubmission(submissionId: number, status: 'approved' | 'rejected', feedback: string) {
    return this.request<{ message: string }>(`/api/submissions/${submissionId}/review`, {
      method: 'PUT',
      body: JSON.stringify({ status, feedback }),
    });
  }

  async deleteSubmission(submissionId: number) {
    return this.request<{ message: string }>(`/api/submissions/${submissionId}`, {
      method: 'DELETE',
    });
  }

  // Certificates
  async generateCertificate(courseId: string) {
    return this.request<{ certificateId: string; obtainedAt: string }>('/api/certificates', {
      method: 'POST',
      body: JSON.stringify({ courseId }),
    });
  }

  async getCertificates() {
    return this.request<Certificates>('/api/certificates');
  }

  // Exam Results
  async submitExamResult(data: SubmitExamData) {
    return this.request<{ id: number; message: string }>('/api/exam-results', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getMyExamResults() {
    return this.request<ExamResult[]>('/api/exam-results/me');
  }

  async getAllExamResults() {
    return this.request<ExamResult[]>('/api/exam-results');
  }
}

// Types
export interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  role: 'admin' | 'student';
  assignedCourses: string[];
  isActive: boolean;
  createdAt: string;
}

export interface CreateUserData {
  username: string;
  password: string;
  fullName: string;
  email: string;
  role?: 'admin' | 'student';
  assignedCourses?: string[];
  isActive?: boolean;
}

export interface Progress {
  [key: string]: {
    courseId: string;
    moduleId: string;
    completedLessons: string[];
    examScore?: number;
    examPassed: boolean;
    sprintCompleted: boolean;
  };
}

export interface UploadedFile {
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  url: string;
}

export interface SprintSubmission {
  id: number;
  userId?: number;
  userName?: string;
  oddsSlug: string;
  courseId: string;
  courseName: string;
  moduleId: string;
  moduleName: string;
  sprintTitle: string;
  answers: { taskId: string; question: string; answer: string }[];
  attachments?: UploadedFile[];
  status: 'pending' | 'approved' | 'rejected';
  feedback?: string;
  submittedAt: string;
  reviewedAt?: string;
}

export interface SubmitSprintData {
  courseId: string;
  courseSlug: string;
  courseName: string;
  moduleId: string;
  moduleName: string;
  sprintTitle: string;
  answers: { taskId: string; question: string; answer: string }[];
  attachments?: UploadedFile[];
}

export interface Certificates {
  [courseId: string]: {
    certificateId: string;
    obtainedAt: string;
  };
}

export interface ExamAnswer {
  questionId: string;
  question: string;
  selectedOption: number;
  correctOption: number;
  options: string[];
  isCorrect: boolean;
}

export interface SubmitExamData {
  courseId: string;
  courseName: string;
  moduleId: string;
  moduleName: string;
  examTitle: string;
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
  answers: ExamAnswer[];
}

export interface ExamResult {
  id: number;
  userId: number;
  userName: string;
  courseId: string;
  courseName: string;
  moduleId: string;
  moduleName: string;
  examTitle: string;
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
  answers: ExamAnswer[];
  submittedAt: string;
}

export const api = new ApiService();
export default api;
