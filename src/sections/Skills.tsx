import { motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '../data/skills';
import { ChevronRight, Zap } from 'lucide-react';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get category icons with emojis for visual appeal
  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      'Frontend': '⚛️',
      'Backend': '🔧',
      'Databases': '🗄️',
      'Tools & DevOps': '🚀',
      'Programming Languages': '💻',
    };
    return icons[category] || '✨';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' as const },
    },
  };

  return (
    <section
      id="skills"
      className="relative z-10 w-full min-h-screen px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-indigo-500/10 to-purple-500/5 dark:from-purple-500/15 dark:to-pink-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-500/10 to-indigo-500/5 dark:from-violet-500/15 dark:to-indigo-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Zap size={18} className="text-purple-600 dark:text-pink-400" />
            <span className="text-sm font-semibold text-heading">Technical Arsenal</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Skills & <span className="text-transparent bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text">Expertise</span>
          </motion.h2>

          <motion.p
            className="text-paragraph text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of modern technologies, frameworks, and tools that I've mastered to build scalable and elegant solutions
          </motion.p>
        </motion.div>

        {/* Skills Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => setSelectedCategory(
                selectedCategory === skillGroup.category ? null : skillGroup.category
              )}
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-blue-600/20 dark:from-purple-400/25 dark:via-violet-400/15 dark:to-pink-400/25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

                {/* Card Main */}
                <motion.div
                  className="relative h-full p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 dark:hover:border-pink-400/50"
                  initial={false}
                >
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-600/20 to-purple-600/20 dark:from-purple-400/30 dark:to-pink-400/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {getCategoryIcon(skillGroup.category)}
                      </div>
                      <h3 className="text-heading text-xl sm:text-2xl font-bold group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: selectedCategory === skillGroup.category ? 90 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight
                        size={24}
                        className="text-purple-600 dark:text-pink-400 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  </div>

                  {/* Skills Count Badge */}
                  <motion.div
                    className="inline-block mb-6 px-3 py-1 rounded-full bg-light-border dark:bg-dark-border text-xs font-semibold text-heading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skillGroup.items.length} Skills
                  </motion.div>

                  {/* Skills Grid - Always Visible on Desktop */}
                  <motion.div className="hidden md:grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="relative group/skill"
                      >
                        {/* Skill Background Glow */}
                        <div className="absolute inset-0 bg-linear-to-r from-indigo-600/15 to-purple-600/15 dark:from-purple-400/25 dark:to-pink-400/25 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur"></div>

                        {/* Skill Badge */}
                        <motion.div
                          className="relative px-3 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-center text-sm font-semibold text-heading transition-all duration-300 hover:border-purple-500/50 dark:hover:border-pink-400/50"
                          whileHover={{ scale: 1.05, translateY: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Mobile Expandable Skills Section */}
                  <motion.div
                    className="md:hidden"
                    variants={expandVariants}
                    initial="collapsed"
                    animate={selectedCategory === skillGroup.category ? 'expanded' : 'collapsed'}
                  >
                    <motion.div className="grid grid-cols-2 gap-3 pt-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: skillIndex * 0.05 }}
                          className="px-3 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-center text-sm font-medium text-heading hover:border-purple-500/50 dark:hover:border-pink-400/50 transition-all"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 rounded-b-2xl transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          className="mt-20 pt-12 border-t border-light-border dark:border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-sm text-small mb-3">Proficiency Indicators</p>
              <div className="flex gap-4">
                {['Expert', 'Proficient', 'Familiar'].map((level, idx) => (
                  <motion.div
                    key={level}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        idx === 0
                          ? 'bg-linear-to-r from-indigo-600 to-purple-600 dark:from-purple-400 dark:to-pink-400'
                          : idx === 1
                          ? 'bg-light-border dark:bg-dark-border'
                          : 'bg-light-border/50 dark:bg-dark-border/50'
                      }`}
                    ></div>
                    <span className="text-xs font-medium text-paragraph">{level}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-px h-12 bg-light-border dark:bg-dark-border hidden md:block"></div>

            <div className="text-center">
              <p className="text-sm text-small mb-3">Total Technologies</p>
              <motion.p
                className="text-3xl font-bold text-transparent bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {skills.reduce((acc, skill) => acc + skill.items.length, 0)}+
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
