import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Code2 } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const socialIcons = [
    {
      icon: Github,
      href: 'https://github.com/thakurssanjali',
      label: 'GitHub',
      color: 'hover:bg-gray-800 dark:hover:bg-gray-200',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/thakurssanjali',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 dark:hover:bg-blue-400',
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/thakurssanjali/',
      label: 'LeetCode',
      color: 'hover:bg-orange-500 dark:hover:bg-orange-400',
    },
  ];
const handleViewResume = () => {
  window.open('/anshu-resume.pdf', '_blank');
};

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen px-4 py-20 overflow-hidden md:py-0"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bg-pink-300 rounded-full top-20 right-10 w-72 h-72 dark:bg-pink-900/30 mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute bg-purple-300 rounded-full bottom-20 left-10 w-72 h-72 dark:bg-purple-900/30 mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <motion.div
          className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text"
            >
              Anjali Thakur
            </motion.h1>

            {/* Professional description */}
            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100"
            >
              Full Stack Web Developer — building seamless, meaningful and user-focused digital experiences.
            </motion.p>

            {/* Extended tagline */}
            <motion.div
              variants={itemVariants}
              className="max-w-xl mb-10 text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300"
            >
              <p>
                With expertise in modern web technologies, I craft elegant solutions that bridge the gap between
                beautiful design and powerful functionality. Let's build something extraordinary together.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 mb-8 sm:flex-row"
            >
              <button
                onClick={handleViewResume}
                className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 transform rounded-full group bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:shadow-lg hover:shadow-pink-500/50 dark:hover:shadow-pink-400/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Resume
                </span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:opacity-100"></div>
              </button>

              <a
                href="#projects"
                className="relative px-8 py-4 font-semibold text-pink-600 transition-all duration-300 transform border-2 border-pink-500 rounded-full group dark:text-pink-400 dark:border-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image & Social Icons */}
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={imageVariants}
          >
            {/* Profile Image Container */}
            <motion.div
              className="relative mb-8 group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient ring background */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-75 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl group-hover:opacity-100 blur-xl"></div>

              {/* Image container */}
              <div className="relative p-2 overflow-hidden bg-white shadow-2xl dark:bg-gray-900 rounded-3xl">
                <img
                  src="/anshu.png"
                  alt="Anjali Thakur"
                  className="object-cover w-80 h-96 rounded-2xl"
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl group-hover:opacity-100"></div>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-6"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className={`flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats or badges (optional) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-2 mt-12 text-center"
            >
              <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                ✨ Available for opportunities
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute z-20 transform -translate-x-1/2 bottom-10 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-pink-500 dark:text-pink-400" />
      </motion.div>
    </section>
  );
};
