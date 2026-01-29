import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api, { SprintSubmission as ApiSubmission, SubmitSprintData } from '@/services/api';
import { useAuth } from './AuthContext';

export interface SprintSubmission {
  id: number;
  oddsId?: string;
  oddsSlug: string;
  moduleId: string;
  sprintId?: string;
  userId?: number;
  userName?: string;
  courseId: string;
  courseName: string;
  moduleName: string;
  sprintTitle: string;
  answers: { taskId: string; question: string; answer: string }[];
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewedAt?: string;
  reviewedBy?: string;
  feedback?: string;
}

interface SprintReviewContextType {
  submissions: SprintSubmission[];
  submitSprint: (submission: SubmitSprintData) => Promise<void>;
  approveSubmission: (submissionId: number, reviewerId: number, feedback?: string) => Promise<void>;
  rejectSubmission: (submissionId: number, reviewerId: number, feedback: string) => Promise<void>;
  getSubmissionsByUser: (userId: number) => SprintSubmission[];
  getSubmissionByUserAndSprint: (userId: number, courseId: string, moduleId: string) => SprintSubmission | undefined;
  getPendingSubmissions: () => SprintSubmission[];
  getAllSubmissions: () => SprintSubmission[];
  isSprintApproved: (userId: number, courseId: string, moduleId: string) => boolean;
  isSprintPending: (userId: number, courseId: string, moduleId: string) => boolean;
  isSprintRejected: (userId: number, courseId: string, moduleId: string) => boolean;
  refreshSubmissions: () => Promise<void>;
}

const SprintReviewContext = createContext<SprintReviewContextType | undefined>(undefined);

export const SprintReviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser, isAuthenticated, isAdmin } = useAuth();
  const [submissions, setSubmissions] = useState<SprintSubmission[]>([]);

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      refreshSubmissions();
    } else {
      setSubmissions([]);
    }
  }, [isAuthenticated, currentUser]);

  const refreshSubmissions = async () => {
    try {
      let apiSubmissions: ApiSubmission[];

      if (isAdmin) {
        apiSubmissions = await api.getAllSubmissions();
      } else {
        apiSubmissions = await api.getMySubmissions();
      }

      const mapped: SprintSubmission[] = apiSubmissions.map(s => ({
        id: s.id,
        oddsSlug: s.oddsSlug,
        moduleId: s.moduleId,
        userId: s.userId,
        userName: s.userName,
        courseId: s.courseId,
        courseName: s.courseName,
        moduleName: s.moduleName,
        sprintTitle: s.sprintTitle,
        answers: s.answers,
        submittedAt: s.submittedAt,
        status: s.status,
        reviewedAt: s.reviewedAt,
        feedback: s.feedback
      }));

      setSubmissions(mapped);
    } catch (error) {
      console.error('Failed to load submissions:', error);
    }
  };

  const submitSprint = async (submission: SubmitSprintData) => {
    try {
      await api.submitSprint(submission);
      await refreshSubmissions();
    } catch (error) {
      console.error('Failed to submit sprint:', error);
      throw error;
    }
  };

  const approveSubmission = async (submissionId: number, reviewerId: number, feedback?: string) => {
    try {
      await api.reviewSubmission(submissionId, 'approved', feedback || 'Aprobado. Buen trabajo!');
      await refreshSubmissions();
    } catch (error) {
      console.error('Failed to approve submission:', error);
      throw error;
    }
  };

  const rejectSubmission = async (submissionId: number, reviewerId: number, feedback: string) => {
    try {
      await api.reviewSubmission(submissionId, 'rejected', feedback);
      await refreshSubmissions();
    } catch (error) {
      console.error('Failed to reject submission:', error);
      throw error;
    }
  };

  const getSubmissionsByUser = (userId: number): SprintSubmission[] => {
    return submissions.filter(s => s.userId === userId);
  };

  const getSubmissionByUserAndSprint = (
    userId: number,
    courseId: string,
    moduleId: string
  ): SprintSubmission | undefined => {
    return submissions.find(
      s => s.userId === userId && s.courseId === courseId && s.moduleId === moduleId
    );
  };

  const getPendingSubmissions = (): SprintSubmission[] => {
    return submissions.filter(s => s.status === 'pending');
  };

  const getAllSubmissions = (): SprintSubmission[] => {
    return submissions;
  };

  const isSprintApproved = (userId: number, courseId: string, moduleId: string): boolean => {
    const submission = getSubmissionByUserAndSprint(userId, courseId, moduleId);
    return submission?.status === 'approved';
  };

  const isSprintPending = (userId: number, courseId: string, moduleId: string): boolean => {
    const submission = getSubmissionByUserAndSprint(userId, courseId, moduleId);
    return submission?.status === 'pending';
  };

  const isSprintRejected = (userId: number, courseId: string, moduleId: string): boolean => {
    const submission = getSubmissionByUserAndSprint(userId, courseId, moduleId);
    return submission?.status === 'rejected';
  };

  return (
    <SprintReviewContext.Provider value={{
      submissions,
      submitSprint,
      approveSubmission,
      rejectSubmission,
      getSubmissionsByUser,
      getSubmissionByUserAndSprint,
      getPendingSubmissions,
      getAllSubmissions,
      isSprintApproved,
      isSprintPending,
      isSprintRejected,
      refreshSubmissions
    }}>
      {children}
    </SprintReviewContext.Provider>
  );
};

export const useSprintReview = (): SprintReviewContextType => {
  const context = useContext(SprintReviewContext);
  if (!context) {
    throw new Error('useSprintReview must be used within a SprintReviewProvider');
  }
  return context;
};
