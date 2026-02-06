import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

interface HighlightBoxProps {
  children: React.ReactNode;
  variant?: "formula" | "quote" | "highlight" | "gradient";
  author?: string;
  label?: string;
}

export const HighlightBox = ({ children, variant = "highlight", author, label }: HighlightBoxProps) => {
  if (variant === "formula") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="my-10 relative"
      >
        {label && (
          <span className="absolute -top-3 left-6 px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
            {label}
          </span>
        )}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-mono font-bold text-purple-700 dark:text-purple-300 tracking-wide">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "quote") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="my-10 relative"
      >
        <div className="absolute -left-2 -top-2">
          <Quote className="w-12 h-12 text-primary/20" />
        </div>
        <blockquote className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 pl-12 border-l-4 border-primary">
          <p className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
            {children}
          </p>
          {author && (
            <footer className="mt-4 text-muted-foreground font-medium">
              — {author}
            </footer>
          )}
        </blockquote>
      </motion.div>
    );
  }

  if (variant === "gradient") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10 blur-xl" />
        <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-lg text-foreground leading-relaxed font-medium">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default highlight
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-10 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 text-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default HighlightBox;
