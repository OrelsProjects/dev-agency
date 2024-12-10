import React from "react";
import { Code2, Shield, Clock, Users, BarChart, Brain } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { experienceYears } from "@/lib/utils/date";

const features = [
  {
    icon: Code2,
    title: "Personal Treatment",
    description:
      "No external developers. I personally write every line of code for your project.",
  },
  {
    icon: Shield,
    title: "Best Tools & Practices",
    description:
      "From Vercel to AWS, you'll get the best solution tailored to your specific needs.",
  },
  {
    icon: Users,
    title: "Complete Documentation",
    description:
      "Everything is documented for easy onboarding of future developers as you grow.",
  },
  {
    icon: Clock,
    title: "14-Day Support Guarantee",
    description:
      "Two weeks of dedicated support to ensure everything runs smoothly.",
  },
  {
    icon: Brain,
    title: "You Are In Control",
    description:
      "Full ownership and control of your product with guided setup of all admin accounts.",
  },
  {
    icon: BarChart,
    title: "Analytics & SEO Included",
    description: "Built-in analytics and SEO optimization with every plan.",
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Me?</h2>
            <p className="mt-4 text-xl text-gray-600">
              {experienceYears}+ years of proven experience delivering
              high-quality software solutions
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="relative h-full bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur" /> */}
                  <div className="relative bg-white p-6 rounded-xl">
                    <motion.div
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900">
                  Ready to build something amazing?
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Let's discuss your project and create something extraordinary
                  together.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <motion.a
                  href="#plans"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WhyMe;
