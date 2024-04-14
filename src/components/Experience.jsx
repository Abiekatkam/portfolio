import React from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceData } from "../utils/JsonData";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-full h-[100%] lg:min-h-[553px] flex flex-col items-start gap-2">
      <div className="w-full flex flex-row items-center justify-between gap-4 mb-6">
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
          Experience
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

      <div className="w-full h-fit flex flex-col items-start justify-start gap-8">
        {ExperienceData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
