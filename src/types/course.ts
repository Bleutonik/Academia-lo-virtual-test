export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  theory: Lesson[];
  sprint: {
    id: string;
    title: string;
    description: string;
    tasks: {
      id: string;
      question: string;
      type: 'text' | 'multiple-choice';
      options?: string[];
      correctAnswer?: string;
    }[];
  };
  exam: {
    id: string;
    title: string;
    questions: {
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
    }[];
    passingScore: number;
  };
}

export interface CourseData {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  totalLessons: string;
  icon: string;
  color: string;
  modules: Module[];
  certificate: {
    title: string;
    description: string;
  };
}

export interface UserProgress {
  courseId: string;
  courseSlug: string;
  lessonViewed: string[];
  modulesCompleted: string[];
  sprintsCompleted: string[];
  examsCompleted: {
    moduleId: string;
    score: number;
    passed: boolean;
    date: string;
  }[];
  certificateEarned: boolean;
  certificateDate?: string;
}

export interface UserCourseProgress {
  [courseId: string]: UserProgress;
}
