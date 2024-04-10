import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="w-full h-fit min-h-[553px] flex flex-col items-start gap-2">
      <div className="w-full flex flex-row items-center justify-start gap-4 mb-6">
        <h1 className="text-5xl capitalize font-semibold w-fit">Experience</h1>
        <span className="w-[60%] h-[0.5px] dark:bg-slate-50 bg-stone-950"></span>
      </div>

      <ExperienceCard />
    </div>
  );
};

export default Experience;
