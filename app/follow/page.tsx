"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "./use-follow-pointer";

const Follow = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="h-screen bg-blue-100">
      <motion.div
        ref={ref}
        className="w-24 h-24 bg-red-100 rounded-full opacity-100 shadow-4xl shadow-red-500"
        style={{ x, y }}
      />
      
    </div>
  );
};

export default Follow;

