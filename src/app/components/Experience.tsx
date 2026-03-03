import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimatedInView } from "@/hooks/useAnimatedInView";
import { staggerContainer, fadeInUp, fadeInLeft } from "@/lib/animations";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/app/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();
  const { ref, inView } = useAnimatedInView();

  const techPerHighlight = [
    ["Next.js", "TypeScript", "Prisma"],
    ["LangGraph", "LangChain", "Voice AI"],
    ["AWS ECS", "S3", "EC2", "Docker", ".NET 8", "Entity Framework"],
    ["MCP", "LangGraph"],
    ["Hangfire", "RBAC", "2FA", "MFA"],
    ["REST API", "Swagger", "MercadoPago", "Siro", "Bitrix", "Tango"],
  ];

  return (
    <section id="experience" aria-label={t("experience.title")} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section heading */}
          <motion.div className="mb-12 md:mb-16" variants={fadeInLeft}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-terminal-green font-mono text-lg md:text-xl font-normal">{">"} </span>
              {t("experience.title")}
              <span className="text-terminal-green cursor-blink">_</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-terminal-green/40" />
          </motion.div>

          {portfolioData.experience.map((exp, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="relative pl-6 md:pl-10">
              {/* Timeline line — green */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-terminal-green/20" />

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-terminal-green shadow-[0_0_8px_rgba(0,255,136,0.4)]" />

              {/* Company header */}
              <div className="mb-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-terminal-green" />
                  {exp.company}
                </h3>
                <p className="font-mono text-base text-terminal-green mt-1">
                  {t("experience.position")}
                </p>
                <div className="flex flex-wrap gap-4 mt-2 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {t("experience.period")}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {exp.highlightKeys.map((highlightKey, hIdx) => {
                  const technologies = techPerHighlight[hIdx] || [];

                  return (
                    <motion.div
                      key={hIdx}
                      variants={fadeInUp}
                      whileHover={{ x: 4 }}
                      className="bg-surface border border-border rounded-lg p-5 hover:border-terminal-green/20 transition-all group"
                    >
                      <h4 className="font-mono text-sm font-semibold text-terminal-cyan mb-2">
                        {t(`${highlightKey}.title` as any)}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(`${highlightKey}.desc` as any)}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech, tIdx) => (
                          <Badge key={tIdx} variant="tech">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
