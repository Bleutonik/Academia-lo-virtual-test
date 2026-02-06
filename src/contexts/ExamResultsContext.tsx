import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import api, { ExamResult, SubmitExamData } from '@/services/api';

interface ExamResultsContextType {
  examResults: ExamResult[];
  isLoading: boolean;
  submitExamResult: (data: SubmitExamData) => Promise<{ success: boolean; message: string }>;
  refreshExamResults: () => Promise<void>;
  getExamResultsByUser: (userId: number) => ExamResult[];
  getExamResultsByCourse: (courseId: string) => ExamResult[];
}

const ExamResultsContext = createContext<ExamResultsContextType | undefined>(undefined);

export const ExamResultsProvider = ({ children }: { children: ReactNode }) => {
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshExamResults = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await api.getAllExamResults();
      setExamResults(results);
    } catch (error) {
      console.error('Error fetching exam results:', error);
      // If API doesn't exist yet, use empty array
      setExamResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const submitExamResult = useCallback(async (data: SubmitExamData) => {
    try {
      await api.submitExamResult(data);
      // Refresh results after submitting
      await refreshExamResults();
      return { success: true, message: 'Resultado guardado' };
    } catch (error) {
      console.error('Error submitting exam result:', error);
      // Store locally if API fails
      const localResult: ExamResult = {
        id: Date.now(),
        userId: 0,
        userName: 'Usuario',
        ...data,
        submittedAt: new Date().toISOString()
      };
      setExamResults(prev => [...prev, localResult]);
      return { success: true, message: 'Resultado guardado localmente' };
    }
  }, [refreshExamResults]);

  const getExamResultsByUser = useCallback((userId: number) => {
    return examResults.filter(r => r.userId === userId);
  }, [examResults]);

  const getExamResultsByCourse = useCallback((courseId: string) => {
    return examResults.filter(r => r.courseId === courseId);
  }, [examResults]);

  return (
    <ExamResultsContext.Provider value={{
      examResults,
      isLoading,
      submitExamResult,
      refreshExamResults,
      getExamResultsByUser,
      getExamResultsByCourse
    }}>
      {children}
    </ExamResultsContext.Provider>
  );
};

export const useExamResults = () => {
  const context = useContext(ExamResultsContext);
  if (!context) {
    throw new Error('useExamResults must be used within an ExamResultsProvider');
  }
  return context;
};
