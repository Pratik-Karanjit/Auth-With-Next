"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      className="min-h-screen bg-gray-50 text-gray-900"
    >
      {children}
    </motion.div>
  );
}
