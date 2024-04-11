import React, { useEffect, useState } from "react";
import {
  AboutMe,
  Contacts,
  Experience,
  ProfileSidebar,
  Project,
} from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    if (nextMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDarkMode = storedTheme === "dark";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main className="w-full h-screen bg-slate-50 dark:bg-stone-950 dark:text-slate-50 transition-all ease-in-out duration-200 selection:bg-slate-950 selection:text-slate-50 dark:selection:bg-slate-50 dark:selection:text-stone-950">
      <div className="w-full h-full  max-w-[1380px] mx-auto flex flex-row items-start justify-between ">
        {/* sidebar */}
        <div className="w-[25%] h-fit min-h-[580px] my-auto flex flex-col items-start justify-start relative border-r border-r-slate-600 dark:border-r-slate-50 pt-8">
          <ProfileSidebar />
        </div>

        {/* main content */}
        <div
          className="w-[50%] h-fit max-h-[590px] my-auto overflow-y-scroll flex flex-col items-start gap-24 py-8 px-4"
          id="contentDisplay"
        >
          <AboutMe />
          <Experience />
          <Project />
          <Contacts />
        </div>

        {/* sidebar */}
        <div className="w-[20%] h-fit min-h-[580px] my-auto flex flex-col items-start justify-start gap-6 border-l border-l-slate-600 dark:border-l-slate-50 pt-8 px-4">
          <button
            className="w-fit h-fit flex flex-row items-center gap-2 text-lg uppercase font-semibold cursor-pointer transition-all ease-in duration-200"
            onClick={toggleDarkMode}
          >
            <span>
              <i className={`fa-solid fa-${!darkMode ? "moon" : "sun"}`}></i>
            </span>
            <span>{!darkMode ? "DARK" : "LIGHT"}</span>
          </button>

          <div className="w-full h-fit flex flex-col items-start justify-center gap-4">
            <div className="w-fit text-xl capitalize font-semibold px-4 dark:text-slate-50 dark:hover:text-slate-300 cursor-pointer">
              <span>About Me</span>
            </div>

            <div className="w-fit text-xl capitalize font-semibold px-4 dark:text-slate-50 dark:hover:text-slate-300 cursor-pointer">
              <span>experience</span>
            </div>

            <div className="w-fit text-xl capitalize font-semibold px-4 dark:text-slate-50 dark:hover:text-slate-300 cursor-pointer">
              <span>projects</span>
            </div>

            <div className="w-fit text-xl capitalize font-semibold px-4 dark:text-slate-50 dark:hover:text-slate-300 cursor-pointer">
              <span>contact</span>
            </div>
          </div>

          <button
            type="button"
            className="w-fit h-fit mt-auto mb-6 px-3 p-2 font-semibold flex items-center flex-row justify-center gap-2 border dark:border-slate-50 active:scale-110 transition-all ease-in-out duration-300 capitalize"
          >
            Download resume
            <span className="animate-bounce">
              <i className="fa-solid fa-download"></i>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
