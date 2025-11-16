import { motion } from 'framer-motion';
import { Home, Code, Briefcase, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', href: 'home', icon: Home },
  { label: 'Skills', href: 'skills', icon: Code },
  { label: 'Projects', href: 'projects', icon: Briefcase },
  { label: 'Contact', href: 'contact', icon: Mail },
];

export const NavigationDock = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 lg:hidden bg-pink-500 text-white p-2 rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Desktop Dock */}
      <motion.nav
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-full p-4 border border-white/20"
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
                ? 'bg-pink-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={item.label}
          >
            <item.icon size={20} />
          </motion.button>
        ))}

        <motion.div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto" />

        <motion.button
          onClick={toggleTheme}
          className="p-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-16 right-4 z-50 lg:hidden bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => handleScroll(item.href)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                activeSection === item.href
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              whileHover={{ x: 4 }}
            >
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.button>
          ))}

          <motion.div className="h-0.5 bg-gray-200 dark:bg-gray-700 my-2" />

          <motion.button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            whileHover={{ x: 4 }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            <span className="text-sm font-medium">
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </span>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};
