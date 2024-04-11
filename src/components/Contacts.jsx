import React from "react";
import FormStates from "./FormStates";

const Contacts = () => {
  return (
    <div className="w-full h-fit min-h-[563px] flex flex-col items-start gap-2 transition-all ease-in duration-300">
      <div className="w-full flex flex-row items-center justify-start gap-4">
        <h1 className="text-5xl capitalize font-semibold w-fit">Contact</h1>
        <span className="w-[60%] h-[0.5px] dark:bg-slate-50 bg-stone-950"></span>
      </div>

      <p className="text-md text-balance mt-2 indent-14">
        Don't hesitate to get in touch with me. I'm here and eager to connect!
        Whether you're considering a project collaboration, seeking advice, or
        simply want to discuss the latest tech trends, I'm all ears. Let's start
        a conversation and explore the possibilities together!
      </p>

      <div className="w-[85%] mx-auto">
        <FormStates />
      </div>
    </div>
  );
};

export default Contacts;
