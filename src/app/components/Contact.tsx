import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Contact() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: portfolioData.personal.email,
      link: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: portfolioData.personal.phone,
      link: `tel:+54${portfolioData.personal.phone}`,
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: portfolioData.personal.location,
      link: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: t("contact.viewProfile"),
      link: `https://${portfolioData.personal.linkedin}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: t("contact.viewRepos"),
      link: portfolioData.personal.github,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
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
              {t("contact.title")}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto rounded-full" />
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {contactInfo.map((contact, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet-500/10 rounded-lg">
                      <contact.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-400 mb-1">
                        {contact.label}
                      </h3>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          target={contact.link.startsWith("http") ? "_blank" : undefined}
                          rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-lg text-violet-400 hover:text-cyan-400 transition-colors break-all"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-300">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t("contact.readyTitle")}
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                {t("contact.readyDescription")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() =>
                    window.open(`mailto:${portfolioData.personal.email}`)
                  }
                  className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t("contact.sendEmail")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    window.open(`https://${portfolioData.personal.linkedin}`, "_blank")
                  }
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
