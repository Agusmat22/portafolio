import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimatedInView } from "@/hooks/useAnimatedInView";
import { stagger010, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { Briefcase, Target, Calendar, Award } from "lucide-react";

export function About() {
  const { t } = useLanguage();
  const { ref, inView } = useAnimatedInView();

  const stats = [
    { icon: Calendar, key: "experience", label: t("about.yearsExperience"), value: "2+" },
    { icon: Briefcase, key: "projects", label: t("about.projectsCompleted"), value: "15+" },
    { icon: Target, key: "tech", label: t("about.technologies"), value: "20+" },
    { icon: Award, key: "certs", label: t("about.certifications"), value: "5+" },
  ];

  return (
    <section id="about" aria-label={t("about.title")} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger010}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section heading — terminal style */}
          <motion.div className="mb-12 md:mb-16" variants={fadeInLeft}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-terminal-green font-mono text-lg md:text-xl font-normal">{">"} </span>
              {t("about.title")}
              <span className="text-terminal-green cursor-blink">_</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-terminal-green/40" />
          </motion.div>

          {/* Asymmetric layout: text 60% + stats 40% */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Text content */}
            <motion.div variants={fadeInLeft} className="lg:col-span-3">
              <div className="border-l-2 border-terminal-green/30 pl-6 space-y-5">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("about.intro")}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("about.description")}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("about.passion")}
                </p>
              </div>
            </motion.div>

            {/* Stats — terminal key:value style */}
            <motion.div variants={fadeInRight} className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.key}
                    variants={fadeInUp}
                    whileHover={{ y: -4, borderColor: "rgba(0,255,136,0.3)" }}
                    className="bg-surface border border-border rounded-lg p-5 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 text-terminal-green mb-3" />
                    <div className="font-display text-2xl font-bold text-terminal-green mb-1">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
