import React from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1964",
    stats: ["50% faster loading", "30% increase in sales"],
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for SaaS businesses with real-time data visualization",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    stats: ["10k+ active users", "99.9% uptime"],
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for fitness tracking",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1470",
    stats: ["4.8 star rating", "100k+ downloads"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              A showcase of my recent work and successful deliveries
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className=" mt-4 flex flex-wrap flex-col gap-2">
                    {project.stats.map((stat, statIndex) => (
                      <motion.span
                        key={statIndex}
                        className="w-fit inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        whileHover={{ scale: 1.05 }}
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <ScaleIn delay={0.6}>
          <div className="mt-16 text-center">
            <motion.a
              href="#plans"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default Portfolio;
