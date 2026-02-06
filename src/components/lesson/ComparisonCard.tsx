import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

interface ComparisonItem {
  text: string;
}

interface ComparisonCardProps {
  leftTitle: string;
  rightTitle: string;
  leftItems: ComparisonItem[];
  rightItems: ComparisonItem[];
  leftType?: "negative" | "neutral";
  rightType?: "positive" | "neutral";
}

export const ComparisonCard = ({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
  leftType = "negative",
  rightType = "positive"
}: ComparisonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-10 rounded-2xl border-2 overflow-hidden bg-card"
    >
      <div className="grid md:grid-cols-2">
        {/* Left Side */}
        <div className={`p-6 ${leftType === "negative" ? "bg-red-50 dark:bg-red-950/20" : "bg-muted/30"}`}>
          <div className="flex items-center gap-3 mb-5">
            {leftType === "negative" && (
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
            )}
            <h4 className={`font-bold text-lg ${leftType === "negative" ? "text-red-700 dark:text-red-400" : ""}`}>
              {leftTitle}
            </h4>
          </div>
          <ul className="space-y-3">
            {leftItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                {leftType === "negative" && (
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-muted-foreground">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className={`p-6 ${rightType === "positive" ? "bg-green-50 dark:bg-green-950/20" : "bg-muted/30"} border-t md:border-t-0 md:border-l`}>
          <div className="flex items-center gap-3 mb-5">
            {rightType === "positive" && (
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}
            <h4 className={`font-bold text-lg ${rightType === "positive" ? "text-green-700 dark:text-green-400" : ""}`}>
              {rightTitle}
            </h4>
          </div>
          <ul className="space-y-3">
            {rightItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                {rightType === "positive" && (
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-muted-foreground">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Arrow indicator */}
      <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-background border-2 flex items-center justify-center shadow-lg">
          <ArrowRight className="w-6 h-6 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonCard;
