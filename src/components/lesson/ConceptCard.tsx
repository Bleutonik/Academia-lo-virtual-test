import { motion } from "framer-motion";
import { Lightbulb, Zap, BookOpen, Target, AlertCircle, CheckCircle, Info } from "lucide-react";

type ConceptType = "definition" | "formula" | "tip" | "warning" | "success" | "info" | "key";

interface ConceptCardProps {
  type?: ConceptType;
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const typeStyles: Record<ConceptType, { bg: string; border: string; iconBg: string; icon: React.ReactNode }> = {
  definition: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-blue-500",
    icon: <BookOpen className="w-5 h-5 text-white" />
  },
  formula: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    iconBg: "bg-purple-500",
    icon: <Zap className="w-5 h-5 text-white" />
  },
  tip: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    iconBg: "bg-amber-500",
    icon: <Lightbulb className="w-5 h-5 text-white" />
  },
  warning: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    iconBg: "bg-red-500",
    icon: <AlertCircle className="w-5 h-5 text-white" />
  },
  success: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-800",
    iconBg: "bg-green-500",
    icon: <CheckCircle className="w-5 h-5 text-white" />
  },
  info: {
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    border: "border-cyan-200 dark:border-cyan-800",
    iconBg: "bg-cyan-500",
    icon: <Info className="w-5 h-5 text-white" />
  },
  key: {
    bg: "bg-gradient-to-br from-primary/10 to-secondary/10",
    border: "border-primary/30",
    iconBg: "bg-gradient-to-br from-primary to-secondary",
    icon: <Target className="w-5 h-5 text-white" />
  }
};

export const ConceptCard = ({ type = "info", title, children, icon }: ConceptCardProps) => {
  const styles = typeStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border-2 ${styles.bg} ${styles.border} p-6 my-8`}
    >
      <div className="flex gap-4">
        <div className={`w-10 h-10 rounded-xl ${styles.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
          {icon || styles.icon}
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-bold text-lg mb-2 text-foreground">{title}</h4>
          )}
          <div className="text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConceptCard;
