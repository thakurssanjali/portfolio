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
    <footer className="relative z-10 w-full px-4 py-12 border-t border-gray-200 sm:px-6 lg:px-8 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
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
            <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white drop-shadow">
              Portfolio
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
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
                className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-pink-500 hover:text-white"
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
            <p className="flex items-center justify-center gap-2 font-medium text-gray-700 dark:text-gray-200 md:justify-end">
              Made with <Heart size={16} className="text-pink-500 fill-pink-500" /> by Ukie
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 sm:flex-row"
          initial={{ opacity: 10 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              © {currentYear} All rights reserved.
            </p>
          </div>

         
        </motion.div>
      </div>
    </footer>
  );
};
