import React from "react";
import ProfileImage from "../assets/abhishek_katkam.jpg";
import { motion } from "framer-motion";

const ProfileSidebar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 2 },
        }}
        className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain overflow-hidden ring-4 ring-slate-600 shadow-2xl dark:ring-slate-100 rounded-md transition-all duration-500 ease-in"
      >
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            delay: 0.5,
            x: { duration: 2 },
          }}
          src={ProfileImage}
          alt="Abhishek Kaatkam profile"
          className="w-full h-full object-center grayscale"
        />
      </motion.div>

      <div className="w-fit h-fit transition-all duration-500 ease-in flex flex-col items-start gap-4">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              delay: 0.5,
              x: { duration: 2 },
            }}
            className="uppercase lg:text-2xl text-xl text-slate-500 dark:text-slate-300 font-semibold transition-all duration-500 ease-in"
          >
            Hey, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              delay: 1.5,
              x: { duration: 2.5 },
            }}
            className="lg:text-6xl text-5xl font-semibold leading-[3rem] text-stone-900 dark:text-slate-50 transition-all duration-500 ease-in"
          >
            Abhishek Katkam
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            delay: 2.25,
            x: { duration: 2.5 },
          }}
          className="lg:text-md text-xl uppercase text-slate-500 dark:text-slate-300 font-semibold transition-all duration-500 ease-in"
        >
          frontend developer
        </motion.p>

        <div className="w-full h-fit flex flex-col items-start justify-center gap-1">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              delay: 2.75,
              x: { duration: 2.5 },
            }}
            className="text-sm uppercase text-slate-500 dark:text-slate-300 font-semibold transition-all duration-500 ease-in mt-2"
          >
            follow me on
          </motion.p>
          <div className="w-full h-fit flex flex-row items-center gap-4">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 3,
                x: { duration: 2.5 },
              }}
              href="https://twitter.com/AbhishekKatkam9"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300 hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 3.5,
                x: { duration: 2.5 },
              }}
              href="https://www.linkedin.com/in/abhishek-katkam-988744231/"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300  hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-linkedin"></i>
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 4,
                x: { duration: 2.5 },
              }}
              href="https://github.com/Abiekatkam"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300 hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-github"></i>
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 4.5,
                x: { duration: 2.5 },
              }}
              href="https://www.instagram.com/_abie._/"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300 hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-instagram"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
