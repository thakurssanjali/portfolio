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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const socialIcons = [
    {
      icon: Github,
      href: 'https://github.com/thakurssanjali',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/thakurssanjali',
      label: 'LinkedIn',
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/thakurssanjali/',
      label: 'LeetCode',
    },
  ];

  const handleViewResume = () => {
    window.open('/anshu-resume.pdf', '_blank');
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen px-4 pt-28 pb-16 md:py-0 md:pt-0 overflow-hidden"
    >
      {/* Radial glow background - subtle backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full pointer-events-none radial-gradient"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <motion.div
          className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Mobile First: Image at Top on Mobile, Text on Bottom */}
          {/* Right Column - Profile Image & Social Icons */}
          <motion.div
            className="flex flex-col items-center justify-center order-first md:order-last"
            variants={imageVariants}
          >
            {/* Profile Image Container with glass effect */}
            <motion.div
              className="relative mb-8 group"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            >
              {/* Outer glow */}
              <div className="absolute transition-all duration-500 -inset-2 bg-linear-to-r from-indigo-400 via-purple-400 to-blue-400 dark:from-purple-400 dark:via-violet-400 dark:to-pink-500 rounded-3xl group-hover:shadow-2xl group-hover:shadow-purple-500/50 dark:group-hover:shadow-purple-400/30 blur-2xl opacity-60 group-hover:opacity-100"></div>

              {/* Glass container */}
              <div className="relative p-3 overflow-hidden border shadow-2xl backdrop-blur-xl bg-light-surface dark:bg-dark-surface rounded-3xl border-light-border dark:border-dark-border">
                <img
                  src="/anshu.png"
                  alt="Anjali Thakur"
                  className="object-cover w-72 h-80 md:w-80 md:h-96 rounded-2xl"
                />
                {/* Soft overlay on hover */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl group-hover:opacity-100"></div>
              </div>
            </motion.div>

            {/* Social Icons with enhanced styling */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 md:gap-6"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="relative flex items-center justify-center w-16 h-16 transition-all duration-300 border rounded-full shadow-lg md:w-14 md:h-14 text-light-icon dark:text-dark-icon border-light-border dark:border-dark-border bg-gradient-to-br from-light-button-primary/20 to-light-button-secondary/20 dark:from-dark-button-primary/30 dark:to-dark-button-secondary/30 hover:shadow-purple-500/30 dark:hover:shadow-purple-400/20 group hover:border-light-button-secondary dark:hover:border-dark-button-secondary"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 transition-all duration-300 rounded-full bg-gradient-to-r from-indigo-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-indigo-400/20 group-hover:via-purple-400/30 group-hover:to-blue-400/20"></div>
                  <social.icon size={24} className="relative z-10" />
                </motion.a>
              ))}
            </motion.div>

            {/* Availability badge */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-2 mt-10 text-center md:mt-12"
            >
              <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text">
                ✨ Available for opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div className="flex flex-col justify-center order-last md:order-first" variants={itemVariants}>
            {/* Name with premium gradient */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text drop-shadow-lg"
            >
              Anjali Thakur
            </motion.h1>

            {/* Professional description with gradient */}
            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg font-medium text-light-text-secondary dark:text-dark-text-secondary md:text-xl"
            >
              Full Stack Web Developer crafting elegant, scalable, and user-centered digital experiences.
            </motion.p>

            {/* Extended tagline */}
            <motion.div
              variants={itemVariants}
              className="max-w-xl mb-12 text-base leading-relaxed text-paragraph md:text-lg"
            >
              <p>
                With expertise in modern web technologies, I craft elegant solutions that bridge the gap between
                beautiful design and powerful functionality. Let's build something extraordinary together.
              </p>
            </motion.div>

            {/* CTA Buttons with enhanced styling */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 mb-8 sm:flex-row"
            >
              {/* Primary Button */}
              <button
                onClick={handleViewResume}
                className="btn-primary"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  📄 View Resume
                </span>
              </button>

              {/* Secondary Button */}
              <button
                onClick={handleViewProjects}
                className="btn-secondary"
              >
                <span className="relative z-10">🚀 View Projects</span>
              </button>
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
        <ChevronDown size={32} className="text-light-button-primary dark:text-dark-button-secondary" />
      </motion.div>
    </section>
  );
};
