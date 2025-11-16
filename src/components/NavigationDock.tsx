import { motion } from 'framer-motion';
import { Home, Code, Briefcase, Mail, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', href: 'home', icon: Home },
  { label: 'Skills', href: 'skills', icon: Code },
  { label: 'Projects', href: 'projects', icon: Briefcase },
  { label: 'Contact', href: 'contact', icon: Mail },
];

export const NavigationDock = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  // Update active section on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = navItems.map(item => item.href);
      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (top half)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
  };

  return (
    <>
      {/* Mobile Horizontal Pill Dock - Top */}
      <motion.nav
        className="fixed z-40 flex items-center justify-center gap-2 p-2 -translate-x-1/2 border rounded-full left-1/2 top-3 lg:hidden bg-white/10 dark:bg-dark-surface/40 backdrop-blur-md border-light-border dark:border-dark-border"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.href}
            onClick={() => handleScroll(item.href)}
            className={`p-2.5 rounded-full transition-all ${
              activeSection === item.href
                ? 'bg-linear-to-r from-indigo-600 to-purple-600 dark:from-purple-400 dark:to-pink-500 text-white shadow-lg'
                : 'text-light-icon dark:text-dark-icon hover:text-purple-600 dark:hover:text-pink-400'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={item.label}
          >
            <item.icon size={18} />
          </motion.button>
        ))}

        <motion.div className="h-6 w-0.5 bg-light-border dark:bg-dark-border" />

        <motion.button
          onClick={toggleTheme}
          className="p-2.5 transition-all rounded-full text-light-icon dark:text-dark-icon hover:text-purple-600 dark:hover:text-pink-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Toggle theme"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </motion.button>
      </motion.nav>

      {/* Desktop Dock - Left Side */}
      <motion.nav
        className="fixed z-40 flex-col hidden gap-4 p-4 -translate-y-1/2 border rounded-full left-6 top-1/2 lg:flex bg-white/10 dark:bg-dark-surface/40 backdrop-blur-md border-light-border dark:border-dark-border"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.href}
            onClick={() => handleScroll(item.href)}
            className={`p-3 rounded-full transition-all ${
              activeSection === item.href
                ? 'bg-linear-to-r from-indigo-600 to-purple-600 dark:from-purple-400 dark:to-pink-500 text-white shadow-lg'
                : 'text-light-icon dark:text-dark-icon hover:text-purple-600 dark:hover:text-pink-400'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={item.label}
          >
            <item.icon size={20} />
          </motion.button>
        ))}

        <motion.div className="w-8 h-0.5 bg-light-border dark:bg-dark-border mx-auto" />

        <motion.button
          onClick={toggleTheme}
          className="p-3 transition-all rounded-full text-light-icon dark:text-dark-icon hover:text-purple-600 dark:hover:text-pink-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>
      </motion.nav>
    </>
  );
};
