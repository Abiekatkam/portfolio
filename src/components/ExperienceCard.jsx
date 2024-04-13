import React from "react";
import SkillTag from "./SkillTag";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="w-full h-full lg:min-h-[270px] p-4 rounded-lg shadow-xl bg-slate-200 dark:bg-stone-900 flex flex-row items-start gap-4">
      <div className="w-[20%] hidden lg:block">
        <p className="font-semibold text-md uppercase">{experience.timeline}</p>
      </div>
      <div className="lg:w-[78%] w-full h-fit min-h-[230px] flex flex-col items-start justify-start">
        <h1 className="w-full h-fit text-3xl font-semibold">
          {experience.companyName}
        </h1>
        <p className="capitalize font-normal text-sm">{experience.jobRole}</p>

        <p className="font-semibold lg:hidden mt-2 text-'md uppercase">
          {experience.timeline}
        </p>

        <p className="text-md font-semibold uppercase mt-3 mb-2">
          Technology Skills
        </p>
        <div className="w-full flex flex-wrap flex-row items-start gap-4 transition-all ease-in duration-300">
          {experience.skills.map((skill) => (
            <SkillTag key={skill.id} skill={skill} />
          ))}
        </div>

        <a
          href={experience.companyLink}
          target="_blank"
          className="w-fit h-fit lg:mt-auto mt-4 text-sm capitalize dark:text-slate-300 text-slate-700 flex items-center justify-center gap-2 group transition-all ease-in-out duration-300"
        >
          <span className="group-hover:underline">visit linkedin profile</span>{" "}
          <span className="group-hover:scale-110">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
