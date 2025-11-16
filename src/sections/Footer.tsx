import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thakurssanjali/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/thakurssanjali/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/thakurssanjali/', label: 'LeetCode' },
  ];

  return (
    <footer className="relative z-10 w-full px-4 py-12 border-t border-light-border dark:border-dark-border sm:px-6 lg:px-8 bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-heading drop-shadow">
              Portfolio
            </h3>
            <p className="text-paragraph">
              Building amazing web experiences with modern technologies
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 hover:scale-125"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center gap-2 font-medium text-paragraph md:justify-end">
              Made with <Heart size={16} className="text-pink-500 fill-pink-500" /> by Ukie
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-light-border dark:border-dark-border sm:flex-row"
          initial={{ opacity: 10 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <p className="text-sm font-medium text-small">
              © {currentYear} All rights reserved.
            </p>
          </div>

         
        </motion.div>
      </div>
    </footer>
  );
};
