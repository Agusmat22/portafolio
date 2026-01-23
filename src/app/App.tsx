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

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScroll>
          <div className="min-h-screen bg-black text-white antialiased">
            <ScrollProgress />
            <Header />
            
            <main className="relative">
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
