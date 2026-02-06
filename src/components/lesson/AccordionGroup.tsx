import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionGroupProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  variant?: "default" | "bordered" | "separated";
}

export const AccordionGroup = ({ items, allowMultiple = false, variant = "default" }: AccordionGroupProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };

  const isOpen = (id: string) => openItems.includes(id);

  const variantStyles = {
    default: {
      container: "divide-y divide-border rounded-2xl border bg-card overflow-hidden",
      item: "",
      header: "hover:bg-muted/50",
    },
    bordered: {
      container: "space-y-3",
      item: "border-2 rounded-xl overflow-hidden",
      header: "hover:bg-muted/30",
    },
    separated: {
      container: "space-y-4",
      item: "bg-muted/30 rounded-2xl overflow-hidden",
      header: "hover:bg-muted/50",
    }
  };

  const styles = variantStyles[variant];

  return (
    <div className={`my-8 ${styles.container}`}>
      {items.map((item, index) => (
        <div key={item.id} className={styles.item}>
          <button
            onClick={() => toggleItem(item.id)}
            className={`w-full px-6 py-5 flex items-center gap-4 text-left transition-colors ${styles.header}`}
          >
            {item.icon && (
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
            )}
            {!item.icon && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                {index + 1}
              </div>
            )}
            <span className="flex-1 font-semibold text-foreground">{item.title}</span>
            <motion.div
              animate={{ rotate: isOpen(item.id) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen(item.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                  {item.icon || !item.icon ? (
                    <div className="pl-14">{item.content}</div>
                  ) : (
                    <div className="pl-12">{item.content}</div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default AccordionGroup;
