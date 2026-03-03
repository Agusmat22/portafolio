import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Moon, Sun, Menu, X, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = NAV_LINKS.map((link) => ({
    label: t(link.labelKey),
    href: `#${link.id}`,
  }));

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-terminal-green/10 shadow-[0_1px_20px_rgba(0,255,136,0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo — terminal style */}
          <button
            onClick={() => scrollToSection("#home")}
            className="font-mono text-base md:text-lg text-terminal-green hover:text-terminal-cyan transition-colors focus-visible:ring-2 focus-visible:ring-terminal-green/50 rounded"
          >
            <span className="text-muted-foreground">{">"}</span> AG
            <span className="cursor-blink text-terminal-green">_</span>
          </button>

          {/* Desktop Navigation — bracket style */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-1.5 font-mono text-sm text-muted-foreground hover:text-terminal-green transition-colors focus-visible:ring-2 focus-visible:ring-terminal-green/50 rounded"
              >
                <span className="text-terminal-green/40">[</span>
                {item.label}
                <span className="text-terminal-green/40">]</span>
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5">
            {/* Language Toggle — terminal badge */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="font-mono text-xs px-2.5 py-1 border border-terminal-green/20 rounded bg-terminal-green/5 hover:bg-terminal-green/10 text-terminal-green transition-all focus-visible:ring-2 focus-visible:ring-terminal-green/50"
            >
              {language === "es" ? "ES" : "EN"}
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open(`https://${portfolioData.personal.linkedin}`, "_blank")
              }
              className="hidden md:flex text-muted-foreground hover:text-terminal-green hover:bg-terminal-green/5 h-8 w-8"
            >
              <Linkedin className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-terminal-green hover:bg-terminal-green/5 h-8 w-8"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-muted-foreground hover:text-terminal-green hover:bg-terminal-green/5 h-8 w-8"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-14 bg-background/98 backdrop-blur-xl z-40"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="font-display text-3xl font-bold text-foreground hover:text-terminal-green transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() =>
                  window.open(`https://${portfolioData.personal.linkedin}`, "_blank")
                }
                className="flex items-center gap-2 text-muted-foreground hover:text-terminal-green transition-colors mt-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-mono text-sm">LinkedIn</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
