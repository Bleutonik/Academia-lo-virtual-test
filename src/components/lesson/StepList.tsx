import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Step {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface StepListProps {
  steps: Step[];
  variant?: "numbered" | "icons" | "timeline";
  columns?: 1 | 2 | 3;
}

export const StepList = ({ steps, variant = "numbered", columns = 1 }: StepListProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };

  if (variant === "timeline") {
    return (
      <div className="my-10 relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-14"
            >
              {/* Circle */}
              <div className="absolute left-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                {step.icon || index + 1}
              </div>

              <div className="bg-card rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                {step.description && (
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`my-10 grid ${gridCols[columns]} gap-4`}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-xl p-5 border hover:border-primary/50 hover:shadow-md transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg transition-colors ${
              variant === "icons" && step.icon
                ? "bg-primary/10 text-primary"
                : "bg-gradient-to-br from-primary to-secondary text-white shadow-md"
            }`}>
              {variant === "icons" && step.icon ? step.icon : index + 1}
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              {step.description && (
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepList;
