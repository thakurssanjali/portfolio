import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="min-h-screen w-full px-4 py-20 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white text-center drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          className="text-lg text-gray-900 dark:text-gray-200 text-center mb-16 drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
        >
          A comprehensive set of technologies and tools I've mastered
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-pink-500 dark:text-pink-400">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
