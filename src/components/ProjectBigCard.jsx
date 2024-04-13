import React from "react";

const ProjectBigCard = ({ projects }) => {
  return (
    <div className="lg:w-[93%] lg:h-[190px] h-[260px] w-full group transition-all ease-in duration-200">
      <div className="lg:p-2 lg:px-3 p-3 bg-slate-200 dark:bg-stone-900 group-hover:bg-slate-300 group-hover:dark:bg-stone-800 w-full h-full rounded-lg transition-all ease-in duration-200 flex lg:flex-row flex-col items-start gap-5">
        <div className="lg:w-[30%] w-full lg:h-full h-[65%] object-contain rounded-lg">
          <img
            src={projects.coverImage}
            alt={projects.projectname}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="lg:w-[67%] w-full lg:h-full h-fit flex flex-col items-start gap-2">
          <h1 className="lg:text-xl text-2xl font-semibold dark:text-slate-300 text-slate-700">
            {projects.projectname}
          </h1>
          <p className="text-md hidden lg:block text-balance leading-5 dark:text-slate-300 text-slate-500">
            {projects.description}
          </p>
          <div className="w-full flex items-center justify-start gap-3 mt-auto mb-2">
            <a
              href={projects.sourceCode}
              target="_blank"
              className="lg:text-sm text-md font-semibold capitalize px-2 hover:underline transition-all ease-in duration-200"
            >
              source code
            </a>
            <a
              href={projects.liveUrl}
              target="_blank"
              className={`lg:text-sm text-md font-semibold capitalize px-2 hover:underline transition-all ease-in duration-200 ${
                projects.liveUrl == "" && "hidden"
              }`}
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
