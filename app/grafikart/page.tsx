"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const titleVariants = {
  hidden: { x: -100 },
  visible: { x: 0 },
};

const containerVariants = {
  hidden: { opacity: 0, transition: { when: 'afterChildren', staggerChildren: .2 }, },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: .2 } },
};

function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}

const Grafikart = () => {
  const [open, toggle] = useToggle(true);
  return (
    <>
      <motion.div
        animate={open ? "visible" : "hidden"}
        variants={containerVariants}
        className="h-80 bg-slate-200 flex flex-col gap-5 justify-center items-center"
      >
        <motion.h1
          variants={titleVariants}
          className="text-4xl font-bold text-slate-900"
        >
          Grafikart
        </motion.h1>
        <motion.h1
          variants={titleVariants}
          className="text-4xl font-bold text-slate-900"
        >
          Grafikart
        </motion.h1>
        <motion.h1
          variants={titleVariants}
          className="text-4xl font-bold text-slate-900"
        >
          Grafikart
        </motion.h1>
      </motion.div>
      <button
        onClick={toggle}
        className="ml-96 bg-slate-900 text-slate-200 px-4 py-2 rounded-lg"
      >
        {open ? "Close" : "Open"}
      </button>
      {/* <section className="h-screen">
        <motion.p
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          initial={{ opacity: 0 }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil minus quae incidunt ipsa. Sint natus adipisci vitae maiores consectetur ex, voluptatum iste facere harum ab officia ratione nam magnam.</motion.p>
      </section> */}
    </>
  );
};

export default Grafikart;
