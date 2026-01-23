import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, Languages } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

export function Education() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
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
              {t("education.title")}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-violet-500/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold">{t("education.academicTitle")}</h3>
              </div>

              <div className="space-y-6">
                {portfolioData.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg text-violet-400">
                        {edu.institution}
                      </h4>
                      {edu.status === "In Progress" && (
                        <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                          {t("education.inProgress")}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-300 mb-2">{t(edu.degreeKey as any)}</p>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {t(edu.periodKey as any)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Languages className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold">{t("education.languagesTitle")}</h3>
              </div>

              <div className="space-y-6">
                {portfolioData.languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg text-cyan-400">
                        {t(lang.nameKey as any)}
                      </h4>
                      <Badge
                        variant="outline"
                        className="border-cyan-500/30 bg-cyan-500/5"
                      >
                        {t(lang.levelKey as any)}
                      </Badge>
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
