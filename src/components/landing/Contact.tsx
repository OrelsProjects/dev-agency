import React, { useState } from 'react';
import { MessageSquare, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const formItemHover = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={containerVariants}
      id="contact"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Let's Connect</h2>
          <p className="mt-4 text-xl text-gray-600">
            Ready to start your project? Get in touch today
          </p>
        </motion.div>

        <div className="mt-16 lg:flex lg:items-center lg:gap-8">
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formItemHover} whileHover="hover" whileTap="tap">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </motion.div>
              <motion.div variants={formItemHover} whileHover="hover" whileTap="tap">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </motion.div>
              <motion.div variants={formItemHover} whileHover="hover" whileTap="tap">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </motion.div>
              <motion.div variants={formItemHover} whileHover="hover" whileTap="tap">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 lg:mt-0 lg:w-1/2"
          >
            <div className="bg-background rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Let's discuss your project
              </h3>
              <p className="mt-4 text-gray-600">
                Have a project in mind? Let's talk about how we can work together to create something amazing.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-600" />
                  <span className="ml-4 text-gray-600">contact@example.com</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                  <span className="ml-4 text-gray-600">Schedule a call</span>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="mt-8 flex space-x-4"
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;