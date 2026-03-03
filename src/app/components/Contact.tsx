import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimatedInView } from "@/hooks/useAnimatedInView";
import { staggerContainer, fadeInUp, fadeInLeft } from "@/lib/animations";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const { ref, inView } = useAnimatedInView();

  const contactLinks = [
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
    <section id="contact" aria-label={t("contact.title")} className="py-24 md:py-32 relative overflow-hidden">
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
              {t("contact.title")}
              <span className="text-terminal-green cursor-blink">_</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-terminal-green/40" />
            <p className="text-base text-muted-foreground mt-4 max-w-xl">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          {/* CTA — dominant terminal style */}
          <motion.div
            variants={fadeInUp}
            className="bg-surface border border-border rounded-lg p-8 md:p-12 mb-8"
          >
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
              {t("contact.readyTitle")}
              <span className="text-terminal-green cursor-blink">_</span>
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-6 max-w-lg">
              {t("contact.readyDescription")}
            </p>

            {/* Terminal command CTA */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 bg-terminal-green text-background font-semibold rounded hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all"
              >
                <Mail className="w-4 h-4" />
                {t("contact.sendEmail")}
              </a>
              <a
                href={`https://${portfolioData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 border border-terminal-green/30 text-terminal-green rounded hover:bg-terminal-green/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contact links — horizontal list */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
            {contactLinks.map((contact, idx) => {
              const inner = (
                <div className="flex items-center gap-2 font-mono text-sm group">
                  <contact.icon className="w-4 h-4 text-terminal-green" />
                  <span className="text-muted-foreground text-xs">{contact.label}:</span>
                  <span className="text-foreground group-hover:text-terminal-green transition-colors">
                    {contact.value}
                  </span>
                </div>
              );

              if (contact.link) {
                return (
                  <a
                    key={idx}
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : undefined}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                );
              }

              return <div key={idx}>{inner}</div>;
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
