import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimatedInView } from "@/hooks/useAnimatedInView";
import { stagger008, fadeInLeft } from "@/lib/animations";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/app/components/ui/badge";
import { Terminal } from "lucide-react";
import { useRef, MouseEvent } from "react";

function ProjectCard({
  project,
  index,
  t,
}: {
  project: (typeof portfolioData.projects)[0];
  index: number;
  t: (key: any) => string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isWide = index === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative bg-surface border border-border rounded-lg p-6 hover:border-terminal-green/20 transition-all overflow-hidden ${
        isWide ? "md:col-span-2" : ""
      }`}
    >
      {/* Decorative project number */}
      <span className="absolute top-3 right-4 font-display text-6xl font-bold text-foreground/[0.03] select-none pointer-events-none">
        {num}
      </span>

      {/* Green spotlight on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,255,136,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative" style={{ transform: "translateZ(10px)" }}>
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 bg-terminal-green/10 rounded">
            <Terminal className="w-4 h-4 text-terminal-green" />
          </div>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-terminal-green transition-colors mb-2">
          {t(project.titleKey)}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {t(project.descKey)}
        </p>

        {/* Stack badges — monospace */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.map((tech: string, idx: number) => (
            <Badge key={idx} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag: string, idx: number) => (
            <Badge key={idx} variant="tag">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Bottom line sweep on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-terminal-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const { ref, inView } = useAnimatedInView();

  return (
    <section id="projects" aria-label={t("projects.title")} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger008}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section heading */}
          <motion.div className="mb-12 md:mb-16" variants={fadeInLeft}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-terminal-green font-mono text-lg md:text-xl font-normal">{">"} </span>
              {t("projects.title")}
              <span className="text-terminal-green cursor-blink">_</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-terminal-green/40" />
          </motion.div>

          {/* Bento grid — first card spans 2 cols */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} t={t} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
