import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Moon, Sun, Menu, X, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.education"), href: "#education" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#home")}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AG
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="relative inline-flex items-center h-8 w-16 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                className="absolute h-6 w-7 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 shadow-lg"
                animate={{
                  x: language === "es" ? 2 : 32,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              <span
                className={`absolute left-2 text-xs font-bold transition-colors duration-300 ${
                  language === "es" ? "text-white" : "text-gray-400"
                }`}
              >
                ES
              </span>
              <span
                className={`absolute right-2 text-xs font-bold transition-colors duration-300 ${
                  language === "en" ? "text-white" : "text-gray-400"
                }`}
              >
                EN
              </span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open(`https://${portfolioData.personal.linkedin}`, "_blank")
              }
              className="hidden md:flex text-gray-300 hover:text-white hover:bg-white/10"
            >
              <Linkedin className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-b border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 justify-start"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                onClick={() =>
                  window.open(`https://${portfolioData.personal.linkedin}`, "_blank")
                }
                className="text-gray-300 hover:text-white hover:bg-white/10 justify-start"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
