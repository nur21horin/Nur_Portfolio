import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingPage.css";

const LoadingPage = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1000); // 1 second
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-b from-green-50 to-green-200 flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {/* Tree SVG */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 150"
          className="w-32 h-48"
        >
          {/* Tree trunk */}
          <motion.rect
            x="45"
            y="100"
            width="10"
            height="0"
            fill="#8B5E3C"
            initial={{ height: 0 }}
            animate={{ height: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Tree canopy / leaves */}
          <motion.circle
            cx="50"
            cy="100"
            r="0"
            fill="#34D399"
            initial={{ r: 0 }}
            animate={{ r: 25 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />
          <motion.circle
            cx="35"
            cy="90"
            r="0"
            fill="#10B981"
            initial={{ r: 0 }}
            animate={{ r: 15 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />
          <motion.circle
            cx="65"
            cy="90"
            r="0"
            fill="#10B981"
            initial={{ r: 0 }}
            animate={{ r: 15 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingPage;
