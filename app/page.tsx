"use client";
import { motion } from "framer-motion";

export default function Home() {
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 1,
  //       staggerChildren: 0.5,
  //       staggerDirection: -1,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 },
  // };

  const list = {
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };
  return (
    <div className="my-24 flex flex-col gap-5 justify-center items-center">
      <motion.ul variants={list} animate="hidden" className="bg-red-300">
        <motion.li variants={item} >item 1</motion.li>
        <motion.li variants={item} >item 2</motion.li>
      </motion.ul>
      {/* <motion.ul variants={container} initial="hidden" animate="show" className="w-60 h-60 bg-red-600">
        <motion.li variants={item} className="bg-blue-500 w-20 h-20 m-2" />
        <motion.li variants={item} className="bg-blue-500 w-20 h-20 m-2" />
      </motion.ul> */}
      {/* <motion.div
        // animate={{ x: 100, y: 100, rotate: 360, scale: 1.1 }}
        // whileHover={{ scale: 1.2 }}
        // whileTap={{ scale: 1.1 }}
        // drag
        // dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-60 h-60 bg-red-600"
      /> */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="w-60 h-60 bg-red-600"
      /> */}
      {/* <motion.div
        animate={{ y: 200 }}
        transition={{ type: "spring", stiffness: 10000 }} // Tween, Spring or Inertia
        className="w-60 h-60 bg-red-600"
      /> */}
    </div>
  );
}
