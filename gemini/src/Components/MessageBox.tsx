"use client";
import React from "react";
import Markdown from "react-markdown";
import { motion } from "framer-motion";

interface IMessage {
  message: string;
  type: "you" | "system";
}

const MessageBox = ({ type, message }: IMessage) => {
  // Animation variants for fading text
  const fadeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className={`w-full flex mb-3 gap-3 ${type === "you" ? "justify-end" : "justify-start"}`}>
      {/* Avatar for system messages */}
      {type === "system" && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500"></div>
      )}

      {/* Message Box */}
      <div
        className={`bg-slate-600 py-2 px-4 h-fit w-fit max-w-[75%] rounded-bl-2xl rounded-br-2xl ${
          type === "you" ? "rounded-tl-2xl" : "rounded-tr-2xl"
        }`}
      >
        {/* Render full message with Markdown */}
        <motion.div initial="hidden" animate="visible" variants={fadeVariants}>
          <Markdown>{message}</Markdown>
        </motion.div>
      </div>
    </div>
  );
};

export default MessageBox;