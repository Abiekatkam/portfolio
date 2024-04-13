import React, { useEffect, useState } from "react";
import Resume from "./utils/Professional-Cv.pdf";
import {
  AboutMe,
  Contacts,
  Experience,
  ProfileSidebar,
  Project,
} from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleDownloadResume = () => {
    const fileUrl = Resume;
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "AbhishekKatkamResume.pdf";
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => toast.error("Something went wrong! Please try again."));
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
    <main className="w-full h-fit lg:h-screen bg-slate-50 dark:bg-stone-950 dark:text-slate-50 transition-all ease-in-out duration-200 selection:bg-slate-950 selection:text-slate-50 dark:selection:bg-slate-50 dark:selection:text-stone-950">
      <div className="w-full h-full lg:max-w-[1380px] lg:mx-auto flex lg:flex-row flex-col items-start lg:justify-between ">
        {/* sidebar */}
        <div className="lg:w-[25%] w-full h-fit lg:min-h-[580px] lg:my-auto flex flex-col items-start justify-start gap-6 lg:border-r lg:border-r-slate-600 lg:dark:border-r-slate-50 lg:pt-8 pt-14 lg:pl-6 p-6">
          <ProfileSidebar />

          <div className="w-full h-fit flex flex-row lg:hidden items-center justify-between">
            <button
              onClick={handleDownloadResume}
              type="button"
              className="w-fit h-fit px-3 p-2 font-semibold flex items-center flex-row justify-center gap-2 border dark:border-slate-50 active:scale-95 border-slate-700 transition-all ease-in-out duration-300 capitalize rounded-md"
            >
              Download resume
              <span className="animate-bounce">
                <i className="fa-solid fa-download"></i>
              </span>
            </button>

            <button
              className="w-fit h-fit flex flex-row items-center gap-2 text-lg uppercase font-semibold cursor-pointer transition-all ease-in duration-200"
              onClick={toggleDarkMode}
            >
              <span>
                <i className={`fa-solid fa-${!darkMode ? "moon" : "sun"}`}></i>
              </span>
              <span>{!darkMode ? "DARK" : "LIGHT"}</span>
            </button>
          </div>
        </div>

        {/* main content */}
        <div
          className="lg:w-[50%] w-full h-fit lg:max-h-[590px] my-auto overflow-y-scroll flex flex-col items-start gap-24 py-8 lg:px-4 p-6"
          id="contentDisplay"
        >
          <AboutMe />
          <Experience />
          <Project />
          <Contacts />
        </div>

        {/* sidebar */}
        <div className="w-[20%] hidden h-fit min-h-[580px] my-auto lg:flex flex-col items-start justify-start gap-6 border-l border-l-slate-600 dark:border-l-slate-50 pt-8 px-4">
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
            onClick={handleDownloadResume}
            className="w-fit h-fit mt-auto mb-6 px-3 p-2 font-semibold flex items-center flex-row justify-center gap-2 border dark:border-slate-50 active:scale-95 border-slate-700 transition-all ease-in-out duration-300 capitalize rounded-md"
          >
            Download resume
            <span className="animate-bounce">
              <i className="fa-solid fa-download"></i>
            </span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
