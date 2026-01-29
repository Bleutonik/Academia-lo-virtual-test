import { motion } from "framer-motion";
import { Clock, BookOpen, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { useProgress } from "@/contexts/ProgressContext";
import * as Icons from "lucide-react";

export interface Course {
  id: string;
  title: string;
  slug: string;
  duration: string;
  totalLessons: string;
  description: string;
  icon: string;
  color: string;
  moduleIds: string[];
}

interface CourseCardProps {
  course: Course;
  index: number;
  showButton?: boolean;
}

const CourseCard = ({ course, index, showButton = true }: CourseCardProps) => {
  const { getCourseProgress, isCourseComplete } = useProgress();
  const progress = getCourseProgress(course.id, course.moduleIds);
  const completed = isCourseComplete(course.id, course.moduleIds);

  const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="h-full flex flex-col p-6 rounded-xl border border-border/50 bg-card shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 shadow-lg`}>
          {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
          {course.title}
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1 border-accent/30 text-accent">
            <BookOpen className="w-3.5 h-3.5" />
            {course.totalLessons}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
          {course.description}
        </p>

        {/* Progress */}
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* CTA Button */}
        {showButton && (
          <Button
            asChild
            className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg group`}
          >
            <Link to={`/curso/${course.slug}`}>
              {completed ? "Ver certificado" : progress > 0 ? "Continuar" : "Iniciar Curso"}
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default CourseCard;
