import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                {portfolioData.personal.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {t("footer.brand")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">
                {t("contact.quickLinks")}
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: t("nav.home"), id: "home" },
                  { label: t("nav.experience"), id: "experience" },
                  { label: t("nav.projects"), id: "projects" },
                  { label: t("nav.contact"), id: "contact" },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm text-gray-400 hover:text-violet-400 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">
                {t("contact.connect")}
              </h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://${portfolioData.personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {currentYear} {portfolioData.personal.name}. {t("footer.rights")}
              </p>
              <p className="text-sm text-gray-400 flex items-center gap-1">
                Hecho por
                  Agustín Garcia Navas
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
