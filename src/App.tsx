import { AnimatedBackground } from './components/AnimatedBackground';
import { NavigationDock } from './components/NavigationDock';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-100 to-pink-200 dark:bg-gradient-to-b dark:from-blue-950 dark:via-blue-900 dark:to-black text-black dark:text-gray-100 transition-colors duration-300">
        <AnimatedBackground />
        <NavigationDock />

        <div className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
