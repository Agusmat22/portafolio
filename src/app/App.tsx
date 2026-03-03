import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "../contexts/LanguageContext";
import { SmoothScroll } from "../app/components/SmoothScroll";
import { ScrollProgress } from "../app/components/ScrollProgress";
import { Header } from "../app/components/Header";
import { Hero } from "../app/components/Hero";
import { About } from "../app/components/About";
import { Experience } from "../app/components/Experience";
import { Skills } from "../app/components/Skills";
import { Projects } from "../app/components/Projects";
import { Education } from "../app/components/Education";
import { Contact } from "../app/components/Contact";
import { Footer } from "../app/components/Footer";
import { MatrixRain } from "../app/components/MatrixRain";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScroll>
          <div className="noise-overlay scanline-overlay min-h-screen bg-background text-foreground antialiased font-body">
            {/* Skip to main content — accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-terminal-green focus:text-black focus:rounded focus:font-mono focus:text-sm"
            >
              Skip to main content
            </a>

            <MatrixRain />
            <ScrollProgress />
            <Header />

            <main id="main-content" className="relative">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </main>

            <Footer />
          </div>
        </SmoothScroll>
      </LanguageProvider>
    </ThemeProvider>
  );
}
