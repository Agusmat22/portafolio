import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Target, Calendar, Award } from "lucide-react";

export function About() {
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

  const stats = [
    { icon: Calendar, label: t("about.yearsExperience"), value: "2+" },
    { icon: Briefcase, label: t("about.projectsCompleted"), value: "15+" },
    { icon: Target, label: t("about.technologies"), value: "20+" },
    { icon: Award, label: t("about.certifications"), value: "5+" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("about.title")}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t("about.intro")}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t("about.description")}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("about.passion")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="inline-flex p-3 bg-violet-500/10 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-violet-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
