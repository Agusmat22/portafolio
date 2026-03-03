import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimatedInView } from "@/hooks/useAnimatedInView";
import { stagger008, fadeInUp, fadeInLeft, scaleIn } from "@/lib/animations";
import { portfolioData } from "@/data/portfolio";
import {
  Code2, Database, Cloud, Code, FileCode, GitBranch,
  Container, Terminal, Workflow, Brain, Blocks,
  Shield, Key, Layers,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiDotnet: Code2,
  SiNextdotjs: Layers,
  SiTypescript: FileCode,
  SiPython: Terminal,
  SiPhp: Code,
  SiMysql: Database,
  SiJavascript: Code,
  SiAws: Cloud,
  SiDocker: Container,
  SiGithubactions: GitBranch,
  SiLinux: Terminal,
  SiOpenai: Brain,
  SiPostgresql: Database,
  SiMongodb: Database,
  SiPrisma: Database,
  SiSwagger: FileCode,
  SiN8n: Workflow,
  SiArchlinux: Code2,
  SiAuth0: Shield,
  SiMicroservices: Blocks,
  SiMicrosoftsqlserver: Database,
  SiJsonwebtokens: Key,
  SiClaude: Brain,
  SiCursor: Terminal,
};

const levelColors: Record<string, string> = {
  "skills.level.expert": "bg-terminal-green",
  "skills.level.advanced": "bg-terminal-cyan",
  "skills.level.intermediate": "bg-muted-foreground",
};

export function Skills() {
  const { t } = useLanguage();
  const { ref, inView } = useAnimatedInView();

  const skillCategories = [
    { data: portfolioData.skills.development, size: "large" },
    { data: portfolioData.skills.cloudDevops, size: "large" },
    { data: portfolioData.skills.ai, size: "medium" },
    { data: portfolioData.skills.databases, size: "medium" },
    { data: portfolioData.skills.orm, size: "small" },
    { data: portfolioData.skills.cicd, size: "small" },
    { data: portfolioData.skills.architecture, size: "medium" },
  ];

  return (
    <section id="skills" aria-label={t("skills.title")} className="py-24 md:py-32 relative overflow-hidden">
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
              {t("skills.title")}
              <span className="text-terminal-green cursor-blink">_</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-terminal-green/40" />
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                variants={scaleIn}
                className={`bg-surface border border-border rounded-lg p-5 hover:border-terminal-green/20 transition-all ${
                  category.size === "large" ? "lg:col-span-1" : ""
                }`}
              >
                {/* Category header — code comment style */}
                <div className="font-mono text-xs text-terminal-green/60 mb-4">
                  {"// "}
                  {t(category.data.categoryKey as any)}
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.data.items.map((skill, skillIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    const dotColor = levelColors[skill.levelKey] || "bg-muted-foreground";

                    return (
                      <motion.div
                        key={skillIdx}
                        variants={fadeInUp}
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded hover:border-terminal-green/30 transition-all group"
                      >
                        <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-terminal-green transition-colors" />
                        <span className="font-mono text-xs text-foreground">
                          {skill.name}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${dotColor}`}
                          title={t(skill.levelKey as any)}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-6 font-mono text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-terminal-green" />
              {t("skills.level.expert")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-terminal-cyan" />
              {t("skills.level.advanced")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
              {t("skills.level.intermediate")}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
