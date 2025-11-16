import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { useState } from 'react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
      id="projects"
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
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-lg text-gray-900 dark:text-gray-200 text-center mb-16 drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
        >
          Showcasing my latest work and technical expertise
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors drop-shadow">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-pink-500/20 dark:bg-pink-500/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-3 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projects.map((project) => {
                if (project.id === selectedProject) {
                  return (
                    <div key={project.id}>
                      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white drop-shadow-lg">
                        {project.title}
                      </h2>

                      <p className="text-gray-700 dark:text-gray-200 mb-6 text-lg">
                        {project.longDescription || project.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white drop-shadow">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={20} />
                            View Code
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={20} />
                            View Live
                          </motion.a>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(null)}
                        className="mt-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  );
                }
                return null;
              })}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
