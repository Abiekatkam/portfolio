import React from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceData } from "../utils/JsonData";

const Experience = () => {
  return (
    <div className="w-full h-[100%] min-h-[553px] flex flex-col items-start gap-2 transition-all ease-in duration-300">
      <div className="w-full flex flex-row items-center justify-start gap-4 mb-6">
        <h1 className="text-5xl capitalize font-semibold w-fit">Experience</h1>
        <span className="w-[60%] h-[0.5px] dark:bg-slate-50 bg-stone-950"></span>
      </div>

      <div className="w-full h-fit flex flex-col items-start justify-start gap-8">
        {ExperienceData.map((experience)=>
          <ExperienceCard key={experience.id} experience={experience}/>
        )}
      </div>
    </div>
  );
};

export default Experience;
