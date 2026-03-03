import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimatedInView } from "@/hooks/useAnimatedInView";
import { stagger010, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, Languages } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

export function Education() {
  const { t } = useLanguage();
  const { ref, inView } = useAnimatedInView();

  const langLevelWidth: Record<string, string> = {
    "languages.level.native": "w-full",
    "languages.level.b1": "w-3/5",
  };

  return (
    <section id="education" aria-label={t("education.title")} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger010}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section heading */}
          <motion.div className="mb-12 md:mb-16" variants={fadeInLeft}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-terminal-green font-mono text-lg md:text-xl font-normal">{">"} </span>
              {t("education.title")}
              <span className="text-terminal-green cursor-blink">_</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-terminal-green/40" />
          </motion.div>

          {/* Layout: education 8/12, languages 4/12 */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Education */}
            <motion.div variants={fadeInLeft} className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="w-4 h-4 text-terminal-green" />
                <h3 className="font-mono text-sm text-terminal-green">
                  {t("education.academicTitle")}
                </h3>
              </div>

              <div className="space-y-3">
                {portfolioData.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="bg-surface border border-border rounded-lg p-5 hover:border-terminal-green/20 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-mono text-sm font-semibold text-foreground">
                        {edu.institution}
                      </h4>
                      {edu.status === "In Progress" && (
                        <Badge variant="status">
                          {t("education.inProgress")}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t(edu.degreeKey as any)}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {t(edu.periodKey as any)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeInRight} className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-5">
                <Languages className="w-4 h-4 text-terminal-cyan" />
                <h3 className="font-mono text-sm text-terminal-cyan">
                  {t("education.languagesTitle")}
                </h3>
              </div>

              <div className="space-y-3">
                {portfolioData.languages.map((lang, idx) => {
                  const barWidth = langLevelWidth[lang.levelKey] || "w-2/5";

                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="bg-surface border border-border rounded-lg p-5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm text-foreground">
                          {t(lang.nameKey as any)}
                        </span>
                        <Badge variant="tag">
                          {t(lang.levelKey as any)}
                        </Badge>
                      </div>
                      {/* Proficiency bar */}
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: "100%" } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                          className={`h-full bg-terminal-cyan rounded-full ${barWidth}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
