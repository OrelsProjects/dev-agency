import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
}

const ScaleIn: React.FC<ScaleInProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: inView ? 1 : 0.8,
        opacity: inView ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
