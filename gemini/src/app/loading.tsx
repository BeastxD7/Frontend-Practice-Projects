"use client"
import React from 'react'
import { motion } from 'framer-motion';

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Outer Glowing Circle */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-blue-500 opacity-30 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />

        {/* Core Gemini Orb */}
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl"
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}

export default loading