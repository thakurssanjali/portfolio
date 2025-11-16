import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Code2Icon } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../components/Button';

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thakurssanjali', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/thakurssanjali', label: 'LinkedIn' },
    { icon: Code2Icon, href: 'https://leetcode.com/u/thakurssanjali/', label: 'Leetcode' },
  ];

  return (
    <section id="contact" className="relative z-10 w-full min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <motion.h2
          className="mb-4 text-4xl font-bold text-center text-black sm:text-5xl dark:text-white drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="mb-16 text-lg text-center text-gray-900 dark:text-gray-200 drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
        >
          Whether you have a question, want to collaborate, or just want to say hello — I’d love to connect.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-pink-500/20">
                  <Mail className="text-pink-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white drop-shadow">
                  Email
                </h3>
                <a
                  href="mailto:thakurssanjali@gmail.com"
                  className="font-medium text-gray-700 transition-colors dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  thakurssanjali@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-pink-500/20">
                  <Phone className="text-pink-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white drop-shadow">
                  Phone
                </h3>
                <a
                  href="tel:+919149404876"
                  className="font-medium text-gray-700 transition-colors dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  +91 91494 04876
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white drop-shadow">
                Social Profiles
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 text-gray-600 transition-all bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-300 hover:bg-pink-500 hover:text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg resize-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message..."
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div
                className="p-4 font-medium text-green-800 bg-green-100 rounded-lg dark:bg-green-900/30 dark:text-green-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Your message has been sent successfully!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="p-4 font-medium text-red-800 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✗ Something went wrong. Please try again.
              </motion.div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
