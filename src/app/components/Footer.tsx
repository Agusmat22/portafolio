import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-terminal-green/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Name */}
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-terminal-green">{">"}</span>{" "}
            {portfolioData.personal.name}
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
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
                className="hover:text-terminal-green transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-terminal-green transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`https://${portfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-terminal-green transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-muted-foreground hover:text-terminal-green transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-4 border-t border-border text-center font-mono text-[11px] text-muted-foreground">
          &copy; {currentYear} &mdash; {t("footer.madeWith")} {"<"}React{" />"} {t("footer.by")} {portfolioData.personal.name}
        </div>
      </div>
    </footer>
  );
}
