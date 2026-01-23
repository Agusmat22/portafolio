import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Server,
  Shield,
  Code,
  FileCode,
  GitBranch,
  Container,
  Terminal,
  Workflow,
  Brain,
  Blocks,
  Lock,
  Key,
  Settings,
  Layers,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip";

const iconMap: { [key: string]: any } = {
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
};

export function Skills() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    portfolioData.skills.development,
    portfolioData.skills.cloudDevops,
    portfolioData.skills.ai,
    portfolioData.skills.databases,
    portfolioData.skills.orm,
    portfolioData.skills.architecture,
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("skills.title")}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-6xl mx-auto grid gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-cyan-400">
                  {t(category.categoryKey as any)}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.items.map((skill, skillIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    
                    return (
                      <TooltipProvider key={skillIdx}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{ scale: 1.05, y: -5 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 cursor-pointer group"
                            >
                              <IconComponent className="w-10 h-10 md:w-12 md:h-12 mb-3 text-gray-400 group-hover:text-violet-400 transition-colors duration-300" />
                              <span className="text-xs md:text-sm text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                                {skill.name}
                              </span>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-semibold">{t(skill.levelKey as any)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
