import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import { useState } from 'react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Get project category emoji
  const getCategoryEmoji = (tags: string[]): string => {
    const emojis: Record<string, string> = {
      'Frontend': '🎨',
      'Full Stack': '⚙️',
      'Java': '☕',
      'Game Development': '🎮',
      'Dashboard': '📊',
      'UI/UX': '✨',
      'Portfolio': '💼',
    };
    for (const tag of tags) {
      if (emojis[tag]) return emojis[tag];
    }
    return '🚀';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
    hover: {
      y: -12,
      transition: { duration: 0.3 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-screen px-4 py-24 overflow-hidden sm:px-6 lg:px-8"
    >
      {/* Decorative Background Elements */}
      <div className="absolute right-0 rounded-full top-20 w-96 h-96 bg-linear-to-bl from-purple-500/10 to-pink-500/5 dark:from-purple-500/15 dark:to-pink-500/10 blur-3xl -z-10"></div>
      <div className="absolute left-0 rounded-full bottom-20 w-96 h-96 bg-linear-to-tr from-blue-500/10 to-indigo-500/5 dark:from-blue-500/15 dark:to-indigo-500/10 blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 border rounded-full bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles size={18} className="text-purple-600 dark:text-pink-400" />
            <span className="text-sm font-semibold text-heading">Showcase</span>
          </motion.div>

          <motion.h2
            className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-transparent bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text">Projects</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-paragraph sm:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Showcasing my latest work and technical expertise across diverse technologies and domains
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project.id)}
              className="cursor-pointer group"
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Gradient Glow Background */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-blue-600/20 dark:from-purple-400/25 dark:via-violet-400/15 dark:to-pink-400/25 rounded-3xl group-hover:opacity-100 blur-xl -z-10"></div>

                {/* Main Card */}
                <div className="relative flex flex-col h-full p-8 transition-all duration-300 border rounded-3xl border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-pink-400/50">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center text-3xl transition-transform duration-300 w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-600/20 to-purple-600/20 dark:from-purple-400/30 dark:to-pink-400/30 group-hover:scale-110">
                          {getCategoryEmoji(project.tags)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold transition-colors duration-300 text-heading sm:text-2xl group-hover:text-purple-600 dark:group-hover:text-pink-400 line-clamp-2">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-paragraph sm:text-base line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags - Auto arranging */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        variants={tagVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: tagIdx * 0.05 }}
                        className="px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 size={16} className="text-purple-600 dark:text-pink-400" />
                      <p className="text-xs font-semibold tracking-wider uppercase text-small">Tech Stack</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-light-border/50 dark:bg-dark-border/50 text-heading border border-light-border dark:border-dark-border hover:border-purple-500/50 dark:hover:border-pink-400/50 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 text-xs font-medium text-small">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links - Spacer takes remaining space */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold transition-all duration-300 border rounded-xl border-light-border dark:border-dark-border text-heading hover:border-purple-500/50 dark:hover:border-pink-400/50 hover:bg-light-border/30 dark:hover:bg-dark-border/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span className="hidden sm:inline">Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold text-white transition-all duration-300 shadow-lg rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span className="hidden sm:inline">Live</span>
                      </motion.a>
                    )}
                    {!project.live && project.github && (
                      <motion.button
                        onClick={() => setSelectedProject(project.id)}
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold text-white transition-all duration-300 shadow-lg rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight size={18} />
                        <span className="hidden sm:inline">Details</span>
                      </motion.button>
                    )}
                  </div>

                  {/* Hover Bottom Line Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 origin-left transform bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 rounded-b-3xl"
                    initial={{ scaleX: 0 }}
                    animate={hoveredCard === project.id ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.4 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <motion.div
          className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm ${
            selectedProject !== null ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedProject !== null ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-light-surface dark:bg-dark-surface rounded-3xl max-w-3xl w-full p-8 max-h-[90vh] overflow-y-auto border border-light-border dark:border-dark-border"
            variants={modalVariants}
            initial="hidden"
            animate={selectedProject !== null ? 'visible' : 'hidden'}
            onClick={(e) => e.stopPropagation()}
          >
            {projects.map((project) => {
              if (project.id === selectedProject) {
                return (
                  <motion.div key={project.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {/* Modal Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-16 h-16 text-4xl rounded-2xl bg-linear-to-br from-indigo-600/20 to-purple-600/20 dark:from-purple-400/30 dark:to-pink-400/30">
                          {getCategoryEmoji(project.tags)}
                        </div>
                        <div>
                          <h2 className="mb-2 text-3xl font-bold text-heading">{project.title}</h2>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => setSelectedProject(null)}
                        className="transition-colors text-heading hover:text-purple-600 dark:hover:text-pink-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ✕
                      </motion.button>
                    </div>

                    {/* Modal Content */}
                    <div className="pt-6 space-y-6 border-t border-light-border dark:border-dark-border">
                      {/* Description */}
                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-heading">About</h3>
                        <p className="leading-relaxed text-paragraph">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-heading">Technologies Used</h3>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                          {project.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              className="px-4 py-2 text-sm font-semibold text-center text-white rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-6 border-t border-light-border dark:border-dark-border">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold transition-all border rounded-xl border-light-border dark:border-dark-border text-heading hover:border-purple-500/50 dark:hover:border-pink-400/50 hover:bg-light-border/30 dark:hover:bg-dark-border/30"
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
                            className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold text-white shadow-lg rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={20} />
                            Visit Live
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              }
              return null;
            })}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="pt-12 mt-20 text-center border-t border-light-border dark:border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-lg text-paragraph">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/thakurssanjali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all shadow-lg rounded-2xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 hover:shadow-xl"
            whileHover={{ scale: 1.05, gap: 16 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore on GitHub
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
