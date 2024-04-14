import React from "react";
import FormStates from "./FormStates";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="w-full h-fit min-h-[563px] flex flex-col items-start gap-2 transition-all ease-in duration-300">
      <div className="w-full flex flex-row items-center justify-start gap-4">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1.75,
            delay: 0.5,
            x: { duration: 1.75 },
          }}
          className="lg:text-5xl text-4xl capitalize font-semibold w-fit"
        >
          Contact
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            delay: 1,
            x: { duration: 2 },
          }}
          className="w-[60%] h-[0.5px] hidden lg:block dark:bg-slate-50 bg-stone-950"
        ></motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
        }}
        className="text-md text-balance mt-2 lg:indent-14 indent-10"
      >
        Don't hesitate to get in touch with me. I'm here and eager to connect!
        Whether you're considering a project collaboration, seeking advice, or
        simply want to discuss the latest tech trends, I'm all ears. Let's start
        a conversation and explore the possibilities together!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          delay: 1.3,
          x: { duration: 2 },
        }}
        className="lg:w-[85%] w-full mx-auto"
      >
        <FormStates />
      </motion.div>
    </div>
  );
};

export default Contacts;
