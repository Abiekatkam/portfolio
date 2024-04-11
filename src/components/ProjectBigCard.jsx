import React from "react";

const ProjectBigCard = ({ projects }) => {
  return (
    <div className="w-[93%] h-[190px] group transition-all ease-in duration-200">
      <div className="p-2 px-3 bg-slate-100 dark:bg-stone-900 group-hover:bg-slate-200 group-hover:dark:bg-stone-800 w-full h-full rounded-lg transition-all ease-in duration-200 flex flex-row items-start gap-5">
        <div className="w-[30%] h-full object-contain object-center rounded-lg">
          <img
            src={projects.coverImage}
            alt={projects.projectname}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-[67%] h-full flex flex-col items-start gap-2">
          <h1 className="text-xl font-semibold dark:text-slate-300 text-slate-700">
            {projects.projectname}
          </h1>
          <p className="text-md text-balance leading-5 dark:text-slate-300 text-slate-500">
            {projects.description}
          </p>
          <div className="w-full flex items-center justify-start gap-3 mt-auto mb-2">
            <a
              href={projects.sourceCode}
              target="_blank"
              className="text-sm font-semibold capitalize px-2 hover:underline transition-all ease-in duration-200"
            >
              source code
            </a>
            <a
              href={projects.liveUrl}
              target="_blank"
              className="text-sm font-semibold capitalize px-2 hover:underline transition-all ease-in duration-200"
            >
              preview site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBigCard;
