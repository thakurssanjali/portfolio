import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Code2Icon } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const contactCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
    hover: { y: -8, transition: { duration: 0.3 } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        emailjs.init('YOUR_PUBLIC_KEY');

        await emailjs.sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          formRef.current
        );

        setSubmitStatus('success');
        formRef.current.reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 w-full min-h-screen px-4 py-20 overflow-hidden sm:px-6 lg:px-8">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute rounded-full opacity-50 top-1/4 -left-40 w-80 h-80 blur-3xl bg-purple-500/10 dark:bg-purple-500/20" />
        <div className="absolute rounded-full opacity-50 bottom-1/3 -right-40 w-80 h-80 blur-3xl bg-blue-500/10 dark:bg-blue-500/20" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Animated Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-linear-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 dark:from-purple-400/30 dark:via-violet-400/30 dark:to-pink-400/30 border-indigo-500/30 dark:border-pink-400/30"
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail size={16} className="text-purple-600 dark:text-pink-400" />
            <span className="text-sm font-semibold text-purple-700 dark:text-pink-300">Let's Connect</span>
          </motion.div>

          {/* Title with Gradient */}
          <motion.h2
            className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl text-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get in{' '}
            <span className="text-transparent bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text">
              Touch
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="max-w-2xl mx-auto text-lg text-paragraph"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you have a question, want to collaborate, or just want to say hello — I'd love to connect.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Cards */}
          {[
            { icon: Mail, label: 'Email', value: 'thakurssanjali@gmail.com', href: 'mailto:thakurssanjali@gmail.com', emoji: '✉️' },
            { icon: Phone, label: 'Phone', value: '+91 91494 04876', href: 'tel:+919149404876', emoji: '📞' },
            { icon: Github, label: 'Social', value: 'Connect on Socials', href: 'https://github.com/thakurssanjali', emoji: '🔗' },
          ].map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="relative group"
              variants={contactCardVariants}
            >
              <div className="relative p-6 transition-all duration-300 border rounded-2xl bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border hover:border-purple-500/50 dark:hover:border-pink-400/50 hover:shadow-xl dark:hover:shadow-purple-500/20">
                {/* Gradient Glow Background on Hover */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100 bg-linear-to-br from-indigo-600/5 via-purple-600/5 to-blue-600/5 dark:from-purple-400/10 dark:via-violet-400/10 dark:to-pink-400/10" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 mb-4 text-3xl transition-transform duration-300 rounded-2xl bg-linear-to-br from-indigo-600/20 to-purple-600/20 dark:from-purple-400/30 dark:to-pink-400/30 group-hover:scale-110"
                    whileHover={{ rotate: 5 }}
                  >
                    {contact.emoji}
                  </motion.div>

                  {/* Label */}
                  <h3 className="mb-2 text-lg font-semibold text-heading">{contact.label}</h3>

                  {/* Value */}
                  <p className="text-sm font-medium transition-colors duration-300 text-paragraph group-hover:text-purple-600 dark:group-hover:text-pink-400">
                    {contact.value}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    className="w-0 h-1 mt-4 rounded-full bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Github, href: 'https://github.com/thakurssanjali', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/thakurssanjali', label: 'LinkedIn' },
            { icon: Code2Icon, href: 'https://leetcode.com/u/thakurssanjali/', label: 'LeetCode' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all duration-300 border w-14 h-14 rounded-2xl bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border text-heading hover:border-purple-500/50 dark:hover:border-pink-400/50"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-8 border rounded-3xl bg-light-surface/50 dark:bg-dark-surface/50 border-light-border dark:border-dark-border backdrop-blur-sm"
          >
            <h3 className="mb-6 text-2xl font-bold text-heading">Send me a Message</h3>

            <div className="space-y-5">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-heading">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 transition-all duration-300 border rounded-xl bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border text-heading dark:text-light-text placeholder-light-text/50 dark:placeholder-dark-text/50 focus:outline-none focus:border-purple-500/50 dark:focus:border-pink-400/50 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-pink-400/20"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-heading">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 transition-all duration-300 border rounded-xl bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border text-heading dark:text-light-text placeholder-light-text/50 dark:placeholder-dark-text/50 focus:outline-none focus:border-purple-500/50 dark:focus:border-pink-400/50 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-pink-400/20"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-heading">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 transition-all duration-300 border resize-none rounded-xl bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border text-heading dark:text-light-text placeholder-light-text/50 dark:placeholder-dark-text/50 focus:outline-none focus:border-purple-500/50 dark:focus:border-pink-400/50 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-pink-400/20"
                  placeholder="Write your message..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="flex items-center gap-2 p-4 font-semibold text-green-800 bg-green-100 border border-green-300 rounded-xl dark:bg-green-900/30 dark:border-green-700 dark:text-green-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>✓</span> Your message has been sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="flex items-center gap-2 p-4 font-semibold text-red-800 bg-red-100 border border-red-300 rounded-xl dark:bg-red-900/30 dark:border-red-700 dark:text-red-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>✗</span> Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 shadow-lg rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-400 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};