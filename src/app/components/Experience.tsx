import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/app/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export function Experience() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("experience.title")}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative pl-8 md:pl-12 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-cyan-500" />
                
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-0 w-3 h-3 -translate-x-[5px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/50"
                  whileHover={{ scale: 1.5 }}
                />

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                        <Building2 className="w-6 h-6 text-violet-400" />
                        {exp.company}
                      </h3>
                      <p className="text-xl text-violet-400 font-medium mb-2">
                        {t("experience.position")}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {t("experience.period")}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {exp.highlightKeys.map((highlightKey, hIdx) => {
                      const technologies = [
                        ["Next.js", "TypeScript", "Prisma"],
                        ["LangGraph", "LangChain", "Voice AI"],
                        ["AWS ECS", "S3", "EC2", "Docker", ".NET 8", "Entity Framework"],
                        ["MCP", "LangGraph"],
                        ["Hangfire", "RBAC", "2FA", "MFA"],
                        ["REST API", "Swagger", "MercadoPago", "Siro", "Bitrix", "Tango"]
                      ][hIdx] || [];

                      return (
                        <motion.div
                          key={hIdx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.3 + hIdx * 0.1 }}
                          className="border-l-2 border-violet-500/30 pl-4"
                        >
                          <h4 className="text-lg font-semibold mb-2 text-cyan-400">
                            {t(`${highlightKey}.title` as any)}
                          </h4>
                          <p className="text-gray-300 mb-3">
                            {t(`${highlightKey}.desc` as any)}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, tIdx) => (
                              <Badge
                                key={tIdx}
                                variant="outline"
                                className="text-xs border-violet-500/30 bg-violet-500/5"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
