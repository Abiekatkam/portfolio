import React, { useState } from "react";
import ProjectSmallCard from "./ProjectSmallCard";
import {
  SmallProjectData,
  LargeProjectData,
  AllProjectData,
} from "../utils/JsonData";
import ProjectBigCard from "./ProjectBigCard";
import { motion } from "framer-motion";

const Project = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");

  return (
    <div className="w-full h-fit flex flex-col items-start gap-2 transition-all ease-in duration-300">
      <div className="w-full flex flex-row items-center justify-between mb-4 gap-4">
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
          Projects
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
          className="w-[70%] h-[0.5px] hidden lg:block dark:bg-slate-50 bg-stone-950"
        ></motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
        }}
        className="w-full h-fit flex items-center justify-center mb-3 transition-all ease-in duration-200"
      >
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 rounded-full dark:bg-stone-800 bg-slate-300 p-2 ">
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            className={`cursor-pointer w-fit h-fit lg:p-2 p-1 rounded-full lg:px-5 px-3 font-semibold flex items-center gap-2 ${
              selectedTab == "ALL"
                ? "dark:bg-stone-900 bg-slate-200"
                : "dark:text-stone-400 text-slate-500"
            }`}
            onClick={() => setSelectedTab("ALL")}
          >
            All{" "}
            <span
              className={`text-sm dark:text-stone-400 ${
                selectedTab == "ALL" ? "block" : "hidden"
              }`}
            >
              {AllProjectData.length}
            </span>
          </motion.div>
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            className={`cursor-pointer w-fit h-fit lg:p-2 p-1 rounded-full lg:px-5 px-3 font-semibold flex items-center gap-2  ${
              selectedTab == "LARGE"
                ? "dark:bg-stone-900 bg-slate-200"
                : "dark:text-stone-400 text-slate-500"
            }`}
            onClick={() => setSelectedTab("LARGE")}
          >
            Large{" "}
            <span
              className={`text-sm dark:text-stone-400 ${
                selectedTab == "LARGE" ? "block" : "hidden"
              }`}
            >
              {LargeProjectData.length}
            </span>
          </motion.div>
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            className={`cursor-pointer w-fit h-fit lg:p-2 p-1 rounded-full lg:px-5 px-3 font-semibold flex items-center gap-2 ${
              selectedTab == "SMALL"
                ? "dark:bg-stone-900 bg-slate-200"
                : "dark:text-stone-400 text-slate-500"
            }`}
            onClick={() => setSelectedTab("SMALL")}
          >
            Small{" "}
            <span
              className={`text-sm dark:text-stone-400 ${
                selectedTab == "SMALL" ? "block" : "hidden"
              }`}
            >
              {SmallProjectData.length}
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-fit flex flex-row flex-wrap items-center justify-center gap-5">
        {selectedTab == "LARGE" ? (
          <>
            {LargeProjectData.map((projects, index) => (
              <motion.div
                key={projects.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  delay: index * 0.2,
                }}
                className="lg:w-[93%] lg:h-[190px] h-[260px] w-full group transition-all ease-in duration-200"
              >
                <ProjectBigCard projects={projects} />
              </motion.div>
            ))}
          </>
        ) : selectedTab == "SMALL" ? (
          <>
            {SmallProjectData.map((projects, index) => (
              <motion.div
                key={projects.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  delay: index * 0.2,
                }}
                className="lg:w-[45%] w-full h-[260px] lg:h-[220px] group transition-all ease-in duration-200"
              >
                <ProjectSmallCard projects={projects} />
              </motion.div>
            ))}
          </>
        ) : (
          <>
            {AllProjectData.map((projects, index) =>
              projects.badge == "large" ? (
                <motion.div
                  key={projects.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    delay: index * 0.2,
                  }}
                  className="lg:w-[93%] lg:h-[190px] h-[260px] w-full group transition-all ease-in duration-200"
                >
                  <ProjectBigCard projects={projects} />
                </motion.div>
              ) : (
                <motion.div
                  key={projects.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    delay: index * 0.2,
                  }}
                  className="lg:w-[45%] w-full h-[260px] lg:h-[220px] group transition-all ease-in duration-200"
                >
                  <ProjectSmallCard projects={projects} />
                </motion.div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
