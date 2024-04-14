import React from "react";

const ProjectSmallCard = ({ projects }) => {
  return (
    <div className="lg:p-2 p-3 bg-slate-200 dark:bg-stone-900 group-hover:bg-slate-300 group-hover:dark:bg-stone-800 w-full h-full rounded-lg transition-all ease-in duration-200 flex flex-col items-start gap-2">
      <div className="w-full h-[65%] object-contain object-center rounded-lg">
        <img
          src={projects.coverImage}
          alt={projects.projectname}
          className="w-full h-full rounded-lg"
        />
      </div>
      <h1 className="lg:text-xl text-2xl font-semibold dark:text-slate-300 text-slate-700">
        {projects.projectname}
      </h1>
      <div className="w-full flex items-center justify-start gap-3">
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
          className="lg:text-sm text-md font-semibold capitalize px-2 hover:underline transition-all ease-in duration-200"
        >
          preview site
        </a>
      </div>
    </div>
  );
};

export default ProjectSmallCard;
