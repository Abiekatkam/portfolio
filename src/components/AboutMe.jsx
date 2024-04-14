import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-2 transition-all ease-in duration-300">
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
          About Me
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
        className="w-full text-md leading-6 text-balance lg:indent-16 indent-10 dark:text-slate-200 text-stone-900 transition-all ease-in duration-300"
      >
        As a fervent frontend developer, I dive into every project with
        boundless enthusiasm, fueled by my insatiable passion for crafting
        exceptional user experiences. With a relentless pursuit of excellence, I
        continuously expand my skill set to stay at the forefront of the
        ever-evolving world of web development. From mastering the intricacies
        of HTML, CSS, and JavaScript to leveraging the latest frameworks and
        libraries, I am committed to delivering polished, intuitive UI/UX
        designs that captivate and inspire users.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          delay: 1.5,
          x: { duration: 2 },
        }}
        className="w-full text-md leading-6 text-balance lg:indent-16 indent-10 dark:text-slate-200 text-stone-900 transition-all ease-in duration-300"
      >
        Driven by a thirst for knowledge, I embrace challenges as opportunities
        for growth, pushing the boundaries of my abilities with each new
        endeavor. Through my journey as a developer, I have cultivated a deep
        appreciation for the artistry of frontend development, seamlessly
        blending technical expertise with creative flair to bring concepts to
        life. With a meticulous attention to detail and a keen eye for design, I
        strive to exceed expectations and deliver solutions that not only meet
        but exceed user needs and expectations.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          delay: 2,
          x: { duration: 2 },
        }}
        className="w-full text-md leading-6 text-balance lg:indent-16 indent-10 dark:text-slate-200 text-stone-900 transition-all ease-in duration-300"
      >
        In my portfolio, you'll find a showcase of projects that reflect my
        dedication to excellence and my unwavering commitment to pushing the
        boundaries of what's possible in frontend development. From sleek,
        responsive designs to seamless user interactions, each project is a
        testament to my passion for creating intuitive, visually stunning
        experiences that leave a lasting impression. Join me on this journey as
        we continue to push the boundaries of frontend development and redefine
        what's possible in the world of UI/UX design.
      </motion.p>
    </div>
  );
};

export default AboutMe;
