import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import {
  Lightbulb, AlertTriangle, CheckCircle, Info, Zap,
  Target, BookOpen, ArrowRight, Quote
} from 'lucide-react';

interface LessonRendererProps {
  content: string;
}

// Custom components for markdown elements
const MarkdownComponents = {
  // Headings with better styling
  h1: ({ children }: any) => (
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-foreground mt-12 mb-8 pb-4 border-b-2 border-primary/20"
    >
      {children}
    </motion.h1>
  ),

  h2: ({ children }: any) => (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-6 flex items-center gap-3"
    >
      <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
      {children}
    </motion.h2>
  ),

  h3: ({ children }: any) => (
    <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-10 mb-5">
      {children}
    </h3>
  ),

  h4: ({ children }: any) => (
    <h4 className="text-lg font-semibold text-foreground mt-8 mb-4">
      {children}
    </h4>
  ),

  // Paragraphs with good spacing
  p: ({ children }: any) => {
    // Check if it's a special block
    const text = String(children);

    // Tip block: starts with "💡" or "TIP:" or "> 💡"
    if (text.startsWith('💡') || text.toLowerCase().startsWith('tip:')) {
      return (
        <div className="my-8 bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-muted-foreground leading-relaxed pt-2">
              {text.replace(/^💡\s*|^tip:\s*/i, '')}
            </div>
          </div>
        </div>
      );
    }

    // Warning block: starts with "⚠️" or "WARNING:" or "IMPORTANTE:"
    if (text.startsWith('⚠️') || text.toLowerCase().startsWith('warning:') || text.toLowerCase().startsWith('importante:')) {
      return (
        <div className="my-8 bg-red-50 dark:bg-red-950/30 rounded-2xl p-6 border-2 border-red-200 dark:border-red-800">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-muted-foreground leading-relaxed pt-2">
              {text.replace(/^⚠️\s*|^warning:\s*|^importante:\s*/i, '')}
            </div>
          </div>
        </div>
      );
    }

    // Success/Check block: starts with "✅" or "SUCCESS:"
    if (text.startsWith('✅') || text.toLowerCase().startsWith('success:')) {
      return (
        <div className="my-8 bg-green-50 dark:bg-green-950/30 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-muted-foreground leading-relaxed pt-2">
              {text.replace(/^✅\s*|^success:\s*/i, '')}
            </div>
          </div>
        </div>
      );
    }

    // Info block: starts with "ℹ️" or "INFO:" or "NOTA:"
    if (text.startsWith('ℹ️') || text.toLowerCase().startsWith('info:') || text.toLowerCase().startsWith('nota:')) {
      return (
        <div className="my-8 bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Info className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-muted-foreground leading-relaxed pt-2">
              {text.replace(/^ℹ️\s*|^info:\s*|^nota:\s*/i, '')}
            </div>
          </div>
        </div>
      );
    }

    // Key concept: starts with "🔑" or "KEY:" or "CLAVE:"
    if (text.startsWith('🔑') || text.toLowerCase().startsWith('key:') || text.toLowerCase().startsWith('clave:')) {
      return (
        <div className="my-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border-2 border-primary/30">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-foreground leading-relaxed pt-2 font-medium">
              {text.replace(/^🔑\s*|^key:\s*|^clave:\s*/i, '')}
            </div>
          </div>
        </div>
      );
    }

    // Definition block: starts with "📖" or "DEF:" or "DEFINICIÓN:"
    if (text.startsWith('📖') || text.toLowerCase().startsWith('def:') || text.toLowerCase().startsWith('definición:') || text.toLowerCase().startsWith('definicion:')) {
      return (
        <div className="my-8 bg-purple-50 dark:bg-purple-950/30 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-muted-foreground leading-relaxed pt-2">
              {text.replace(/^📖\s*|^def:\s*|^definición:\s*|^definicion:\s*/i, '')}
            </div>
          </div>
        </div>
      );
    }

    // Formula block: starts with "⚡" or "FORMULA:"
    if (text.startsWith('⚡') || text.toLowerCase().startsWith('formula:') || text.toLowerCase().startsWith('fórmula:')) {
      return (
        <div className="my-10 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Fórmula</span>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-mono font-bold text-purple-700 dark:text-purple-300 tracking-wide">
              {text.replace(/^⚡\s*|^formula:\s*|^fórmula:\s*/i, '')}
            </div>
          </div>
        </div>
      );
    }

    // Regular paragraph
    return (
      <p className="text-base md:text-lg text-muted-foreground leading-[2] mb-8">
        {children}
      </p>
    );
  },

  // Lists with better styling
  ul: ({ children }: any) => (
    <ul className="my-8 space-y-4 pl-0">
      {children}
    </ul>
  ),

  ol: ({ children }: any) => (
    <ol className="my-8 space-y-4 pl-0 counter-reset-item">
      {children}
    </ol>
  ),

  li: ({ children, ordered }: any) => (
    <li className="flex items-start gap-4 text-muted-foreground leading-relaxed">
      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <ArrowRight className="w-4 h-4 text-primary" />
      </span>
      <span className="flex-1 pt-1">{children}</span>
    </li>
  ),

  // Blockquotes as styled quotes
  blockquote: ({ children }: any) => (
    <div className="my-10 relative">
      <div className="absolute -left-2 -top-2">
        <Quote className="w-12 h-12 text-primary/20" />
      </div>
      <blockquote className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 pl-12 border-l-4 border-primary">
        <div className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
          {children}
        </div>
      </blockquote>
    </div>
  ),

  // Code blocks
  code: ({ inline, children }: any) => {
    if (inline) {
      return (
        <code className="bg-muted px-2 py-1 rounded-md text-sm font-mono text-primary">
          {children}
        </code>
      );
    }
    return (
      <pre className="my-8 bg-muted rounded-xl p-6 overflow-x-auto">
        <code className="text-sm font-mono">{children}</code>
      </pre>
    );
  },

  // Strong/bold text
  strong: ({ children }: any) => (
    <strong className="font-bold text-foreground">{children}</strong>
  ),

  // Emphasis/italic
  em: ({ children }: any) => (
    <em className="italic text-foreground/90">{children}</em>
  ),

  // Links
  a: ({ href, children }: any) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary font-medium hover:underline"
    >
      {children}
    </a>
  ),

  // Horizontal rule
  hr: () => (
    <hr className="my-12 border-none h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  ),

  // Images
  img: ({ src, alt }: any) => (
    <figure className="my-10">
      <img
        src={src}
        alt={alt}
        className="rounded-2xl shadow-lg w-full"
      />
      {alt && (
        <figcaption className="text-center text-sm text-muted-foreground mt-3">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};

export const LessonRenderer = ({ content }: LessonRendererProps) => {
  return (
    <article className="max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
      <ReactMarkdown components={MarkdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default LessonRenderer;
