import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 via-red-100 to-red-50 text-red-700 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Error Icon */}
      <motion.div
        className="mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <AlertTriangle className="w-24 h-24 text-red-600" />
      </motion.div>

      {/* Error Code */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Error Message */}
      <motion.p
        className="text-xl md:text-2xl mb-6 text-center max-w-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Oops! The page you are looking for does not exist or has been moved.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
        >
          Go Home
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-all duration-300"
        >
          Contact Support
        </Link>
      </motion.div>

      {/* Decorative Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
      >
        <motion.div
          className="absolute w-64 h-64 bg-red-200 rounded-full -top-20 -left-20 animate-spin-slow"
        />
        <motion.div
          className="absolute w-72 h-72 bg-red-300 rounded-full -bottom-24 -right-24 animate-spin-slow"
        />
      </motion.div>
    </motion.div>
  );
};

export default ErrorPage;
