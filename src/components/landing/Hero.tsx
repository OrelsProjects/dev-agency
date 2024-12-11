import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { experienceYears } from '@/lib/utils/date';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white z-0" />
      <motion.div 
        className="absolute inset-0 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] z-0"
        animate={{
          backgroundPosition: ["0px 0px", "16px 16px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <FadeIn>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get Your Product Built Right
                <span className="block text-green-600">By Someone Who Cares</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                No external developers. No hidden costs. Just pure dedication to bringing your vision to life with the highest quality standards.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <motion.a
                  href="#plans"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-background hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.a>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  {experienceYears}+ Years Experience
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  11+ Products Shipped
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  100% Satisfaction
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <FadeIn direction="left" delay={0.4}>
              <motion.img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070"
                alt="Developer working"
                className="w-full h-auto rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;