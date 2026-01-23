import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/app/components/ui/badge";
import { Code2, Sparkles } from "lucide-react";
import { useRef, MouseEvent } from "react";

function ProjectCard({ project, index, t }: { project: any; index: number; t: (key: any) => string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.15), transparent 40%)",
        }}
      />

      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-violet-500/10 rounded-lg">
            <Code2 className="w-6 h-6 text-violet-400" />
          </div>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
          {t(project.titleKey)}
        </h3>
        
        <p className="text-gray-400 mb-4 leading-relaxed">
          {t(project.descKey)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech: string, idx: number) => (
            <Badge
              key={idx}
              variant="outline"
              className="text-xs border-violet-500/30 bg-violet-500/5"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("projects.title")}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} t={t} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
