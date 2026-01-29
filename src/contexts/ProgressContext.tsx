import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '@/services/api';
import { useAuth } from './AuthContext';

interface ModuleProgress {
  lessonViewed: string[];
  sprintCompleted: boolean;
  examCompleted: boolean;
  examScore: number;
  examPassed: boolean;
}

interface CourseProgress {
  [moduleId: string]: ModuleProgress;
}

interface UserProgress {
  [courseId: string]: CourseProgress;
}

interface CertificateData {
  courseId: string;
  courseName: string;
  userName: string;
  completionDate: string;
  certificateId: string;
}

interface ProgressContextType {
  progress: UserProgress;
  certificates: CertificateData[];
  userName: string;
  setUserName: (name: string) => void;
  markLessonComplete: (courseId: string, moduleId: string, lessonId: string) => void;
  markSprintComplete: (courseId: string, moduleId: string) => void;
  markExamComplete: (courseId: string, moduleId: string, score: number, passed: boolean) => void;
  isLessonComplete: (courseId: string, moduleId: string, lessonId: string) => boolean;
  isSprintComplete: (courseId: string, moduleId: string) => boolean;
  isExamComplete: (courseId: string, moduleId: string) => boolean;
  getExamScore: (courseId: string, moduleId: string) => number;
  isModuleComplete: (courseId: string, moduleId: string) => boolean;
  isCourseComplete: (courseId: string, moduleIds: string[]) => boolean;
  getCourseProgress: (courseId: string, moduleIds: string[]) => number;
  earnCertificate: (courseId: string, courseName: string) => Promise<CertificateData>;
  hasCertificate: (courseId: string) => boolean;
  getCertificate: (courseId: string) => CertificateData | undefined;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser, isAuthenticated } = useAuth();
  const [progress, setProgress] = useState<UserProgress>({});
  const [certificates, setCertificates] = useState<CertificateData[]>([]);

  // Load progress and certificates when user authenticates
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      loadProgress();
      loadCertificates();
    } else {
      setProgress({});
      setCertificates([]);
    }
  }, [isAuthenticated, currentUser]);

  const loadProgress = async () => {
    try {
      const apiProgress = await api.getProgress();
      const userProgress: UserProgress = {};

      Object.values(apiProgress).forEach((item) => {
        if (!userProgress[item.courseId]) {
          userProgress[item.courseId] = {};
        }
        userProgress[item.courseId][item.moduleId] = {
          lessonViewed: item.completedLessons,
          sprintCompleted: item.sprintCompleted,
          examCompleted: item.examPassed || (item.examScore !== undefined && item.examScore !== null),
          examScore: item.examScore || 0,
          examPassed: item.examPassed
        };
      });

      setProgress(userProgress);
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  };

  const loadCertificates = async () => {
    try {
      const apiCertificates = await api.getCertificates();
      const certs: CertificateData[] = Object.entries(apiCertificates).map(([courseId, cert]) => ({
        courseId,
        courseName: '', // Will be filled when needed
        userName: currentUser?.fullName || '',
        completionDate: new Date(cert.obtainedAt).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        certificateId: cert.certificateId
      }));
      setCertificates(certs);
    } catch (error) {
      console.error('Failed to load certificates:', error);
    }
  };

  const userName = currentUser?.fullName || '';

  const setUserName = () => {
    // User name is now managed by AuthContext
  };

  const getModuleProgress = (courseId: string, moduleId: string): ModuleProgress => {
    return progress[courseId]?.[moduleId] || {
      lessonViewed: [],
      sprintCompleted: false,
      examCompleted: false,
      examScore: 0,
      examPassed: false
    };
  };

  const markLessonComplete = async (courseId: string, moduleId: string, lessonId: string) => {
    // Update local state immediately
    setProgress(prev => {
      const courseProgress = prev[courseId] || {};
      const moduleProgress = courseProgress[moduleId] || {
        lessonViewed: [],
        sprintCompleted: false,
        examCompleted: false,
        examScore: 0,
        examPassed: false
      };

      if (!moduleProgress.lessonViewed.includes(lessonId)) {
        return {
          ...prev,
          [courseId]: {
            ...courseProgress,
            [moduleId]: {
              ...moduleProgress,
              lessonViewed: [...moduleProgress.lessonViewed, lessonId]
            }
          }
        };
      }
      return prev;
    });

    // Sync with API
    try {
      await api.updateLessonProgress(courseId, moduleId, lessonId);
    } catch (error) {
      console.error('Failed to sync lesson progress:', error);
    }
  };

  const markSprintComplete = async (courseId: string, moduleId: string) => {
    setProgress(prev => {
      const courseProgress = prev[courseId] || {};
      const moduleProgress = courseProgress[moduleId] || {
        lessonViewed: [],
        sprintCompleted: false,
        examCompleted: false,
        examScore: 0,
        examPassed: false
      };

      return {
        ...prev,
        [courseId]: {
          ...courseProgress,
          [moduleId]: {
            ...moduleProgress,
            sprintCompleted: true
          }
        }
      };
    });

    try {
      await api.updateSprintProgress(courseId, moduleId, true);
    } catch (error) {
      console.error('Failed to sync sprint progress:', error);
    }
  };

  const markExamComplete = async (courseId: string, moduleId: string, score: number, passed: boolean) => {
    setProgress(prev => {
      const courseProgress = prev[courseId] || {};
      const moduleProgress = courseProgress[moduleId] || {
        lessonViewed: [],
        sprintCompleted: false,
        examCompleted: false,
        examScore: 0,
        examPassed: false
      };

      return {
        ...prev,
        [courseId]: {
          ...courseProgress,
          [moduleId]: {
            ...moduleProgress,
            examCompleted: true,
            examScore: score,
            examPassed: passed
          }
        }
      };
    });

    try {
      await api.updateExamProgress(courseId, moduleId, score, passed);
    } catch (error) {
      console.error('Failed to sync exam progress:', error);
    }
  };

  const isLessonComplete = (courseId: string, moduleId: string, lessonId: string): boolean => {
    return getModuleProgress(courseId, moduleId).lessonViewed.includes(lessonId);
  };

  const isSprintComplete = (courseId: string, moduleId: string): boolean => {
    return getModuleProgress(courseId, moduleId).sprintCompleted;
  };

  const isExamComplete = (courseId: string, moduleId: string): boolean => {
    return getModuleProgress(courseId, moduleId).examCompleted;
  };

  const getExamScore = (courseId: string, moduleId: string): number => {
    return getModuleProgress(courseId, moduleId).examScore;
  };

  const isModuleComplete = (courseId: string, moduleId: string): boolean => {
    const mp = getModuleProgress(courseId, moduleId);
    return mp.sprintCompleted && mp.examCompleted && mp.examPassed;
  };

  const isCourseComplete = (courseId: string, moduleIds: string[]): boolean => {
    return moduleIds.every(moduleId => isModuleComplete(courseId, moduleId));
  };

  const getCourseProgress = (courseId: string, moduleIds: string[]): number => {
    if (moduleIds.length === 0) return 0;
    const completed = moduleIds.filter(moduleId => isModuleComplete(courseId, moduleId)).length;
    return Math.round((completed / moduleIds.length) * 100);
  };

  const earnCertificate = async (courseId: string, courseName: string): Promise<CertificateData> => {
    try {
      const result = await api.generateCertificate(courseId);
      const certificateData: CertificateData = {
        courseId,
        courseName,
        userName: currentUser?.fullName || 'Estudiante',
        completionDate: new Date(result.obtainedAt).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        certificateId: result.certificateId
      };

      setCertificates(prev => {
        const existing = prev.find(c => c.courseId === courseId);
        if (existing) return prev;
        return [...prev, certificateData];
      });

      return certificateData;
    } catch (error) {
      console.error('Failed to generate certificate:', error);
      // Fallback for offline mode
      const certificateData: CertificateData = {
        courseId,
        courseName,
        userName: currentUser?.fullName || 'Estudiante',
        completionDate: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        certificateId: `CERT-${courseId.toUpperCase()}-${Date.now()}`
      };
      return certificateData;
    }
  };

  const hasCertificate = (courseId: string): boolean => {
    return certificates.some(c => c.courseId === courseId);
  };

  const getCertificate = (courseId: string): CertificateData | undefined => {
    return certificates.find(c => c.courseId === courseId);
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      certificates,
      userName,
      setUserName,
      markLessonComplete,
      markSprintComplete,
      markExamComplete,
      isLessonComplete,
      isSprintComplete,
      isExamComplete,
      getExamScore,
      isModuleComplete,
      isCourseComplete,
      getCourseProgress,
      earnCertificate,
      hasCertificate,
      getCertificate
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
