import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import { SECTION_IDS } from "@/lib/constants";
import { MapPin, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/0ddd0938ea253c1d07b7304f0ef6aa982b3e5fa5.png";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 30 + Math.random() * 40);

    return () => clearTimeout(timer);
  }, [displayed, started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink text-terminal-green">|</span>
      )}
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
      aria-label="Hero"
    >
      {/* Terminal grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="terminal-grid-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <motion.div
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
        style={{ opacity, scale, y }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative shrink-0"
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56">
              <div className="absolute inset-0 rounded-full box-glow-green opacity-60" />
              <img
                src={profileImage}
                alt={portfolioData.personal.name}
                className="relative w-full h-full object-cover rounded-full border-2 border-terminal-green/30"
              />
            </div>
          </motion.div>

          {/* Terminal-style content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Terminal prompt line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-sm text-muted-foreground mb-4"
            >
              <span className="text-terminal-green">$</span> whoami
            </motion.div>

            {/* Name — massive Syne */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 text-terminal-green terminal-glow-sm mb-4 leading-[1.1]"
            >
              {portfolioData.personal.name}
            </motion.h1>

            {/* Role — terminal output */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-mono text-base md:text-lg text-muted-foreground mb-2"
            >
              <span className="text-terminal-green">{">"}</span>{" "}
              <TypewriterText text={t("hero.title")} delay={800} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-mono text-sm text-terminal-cyan mb-2"
            >
              <span className="text-muted-foreground">{">"}</span>{" "}
              {t("hero.subtitle")}
            </motion.div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-mono text-xs text-muted-foreground mb-8 flex items-center gap-1.5 justify-center lg:justify-start"
            >
              <MapPin className="w-3 h-3 text-terminal-green" />
              {portfolioData.personal.location}
            </motion.div>

            {/* CTAs — terminal commands */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() =>
                  document
                    .getElementById(SECTION_IDS.projects)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-mono text-sm px-5 py-2.5 bg-terminal-green text-background font-semibold rounded hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all"
              >
                $ {t("hero.viewProjects")}
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById(SECTION_IDS.contact)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-mono text-sm px-5 py-2.5 border border-terminal-green/30 text-terminal-green rounded hover:bg-terminal-green/10 transition-all"
              >
                $ {t("hero.contact")} --now
              </button>
              <a
                href={`https://${portfolioData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-4 py-2.5 text-muted-foreground hover:text-terminal-green transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-4 py-2.5 text-muted-foreground hover:text-terminal-green transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator — thin animated line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ height: [0, 40, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-px bg-terminal-green/40 mx-auto"
          />
          <span className="font-mono text-[10px] text-muted-foreground mt-2 block">
            {t("hero.scroll")}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
