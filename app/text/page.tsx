"use client";
import { motion } from "framer-motion";

const Text = () => {
  const text = "Framer Motion is a really cool tool".split(" ");
  return (
    <div>
      {/* {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))} */}

      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
        }}
      >
        Galleries
      </motion.h1>
    </div>
  );
};

export default Text;
