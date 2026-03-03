import { ReactNode } from "react";
import { motion } from "motion/react";
import { useAnimatedInView } from "@/hooks/useAnimatedInView";
import { staggerContainer, smoothTransition } from "@/lib/animations";

interface SectionWrapperProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function SectionWrapper({
  id,
  title,
  children,
  className = "",
  ariaLabel,
}: SectionWrapperProps) {
  const { ref, inView } = useAnimatedInView();

  return (
    <section
      id={id}
      aria-label={ariaLabel || title || id}
      className={`py-24 md:py-32 relative overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={smoothTransition}
        >
          {title && (
            <motion.div
              className="mb-12 md:mb-16"
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                <span className="text-terminal-green font-mono text-lg md:text-xl font-normal">
                  {">"}{" "}
                </span>
                {title}
                <span className="text-terminal-green cursor-blink">_</span>
              </h2>
              <div className="mt-3 h-px w-16 bg-terminal-green/40" />
            </motion.div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
