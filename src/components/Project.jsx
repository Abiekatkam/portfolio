import React, { useState } from "react";
import ProjectSmallCard from "./ProjectSmallCard";
import {
  SmallProjectData,
  LargeProjectData,
  AllProjectData,
} from "../utils/JsonData";
import ProjectBigCard from "./ProjectBigCard";

const Project = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");

  return (
    <div className="w-full h-fit flex flex-col items-start gap-2 transition-all ease-in duration-300">
      <div className="w-full flex flex-row items-center justify-start mb-4 gap-4">
        <h1 className="lg:text-5xl text-4xl capitalize font-semibold w-fit">
          Project
        </h1>
        <span className="w-[60%] h-[0.5px] hidden lg:block dark:bg-slate-50 bg-stone-950"></span>
      </div>

      <div className="w-full h-fit flex items-center justify-center mb-3 transition-all ease-in duration-200">
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 rounded-full dark:bg-stone-800 bg-slate-300 p-2 ">
          <div
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
          </div>
          <div
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
          </div>
          <div
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
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex flex-row flex-wrap items-center justify-center gap-5">
        {selectedTab == "LARGE" ? (
          <>
            {LargeProjectData.map((projects) => (
              <ProjectBigCard key={projects.id} projects={projects} />
            ))}
          </>
        ) : selectedTab == "SMALL" ? (
          <>
            {SmallProjectData.map((projects) => (
              <ProjectSmallCard key={projects.id} projects={projects} />
            ))}
          </>
        ) : (
          <>
            {AllProjectData.map((projects) =>
              projects.badge == "large" ? (
                <ProjectBigCard key={projects.id} projects={projects} />
              ) : (
                <ProjectSmallCard key={projects.id} projects={projects} />
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
