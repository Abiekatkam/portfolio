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
import { motion } from "framer-motion";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("About Me");

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.getAttribute("data-tab"));
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll(".content-section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(tabName.replace(" ", ""));
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full h-fit lg:h-screen bg-slate-50 dark:bg-stone-950 dark:text-slate-50 transition-all ease-in-out duration-200 selection:bg-slate-950 selection:text-slate-50 dark:selection:bg-slate-50 dark:selection:text-stone-950">
      <div className="w-full h-full lg:max-w-[1380px] lg:mx-auto flex lg:flex-row flex-col items-start lg:justify-between ">
        {/* sidebar */}
        <div className="lg:w-[25%] w-full h-fit lg:min-h-[580px] lg:my-auto flex flex-col items-start justify-start gap-6 lg:border-r lg:border-r-slate-600 lg:dark:border-r-slate-50 lg:pt-8 pt-14 lg:pl-6 p-6">
          <ProfileSidebar />

          <div className="w-full h-fit flex flex-row lg:hidden items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 3.5,
                x: { duration: 2 },
              }}
              onClick={handleDownloadResume}
              type="button"
              className="w-fit h-fit px-3 p-2 font-semibold flex items-center flex-row justify-center gap-2 border dark:border-slate-50 border-slate-700 capitalize rounded-md"
            >
              Download resume
              <span className="animate-bounce">
                <i className="fa-solid fa-download"></i>
              </span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 3.5,
                x: { duration: 2 },
              }}
              className="w-fit h-fit flex flex-row items-center gap-2 text-lg uppercase font-semibold cursor-pointer transition-all ease-in duration-200"
              onClick={toggleDarkMode}
            >
              <span>
                <i className={`fa-solid fa-${!darkMode ? "moon" : "sun"}`}></i>
              </span>
              <span>{!darkMode ? "DARK" : "LIGHT"}</span>
            </motion.button>
          </div>
        </div>

        {/* main content */}
        <div
          className="lg:w-[50%] w-full h-fit lg:max-h-[590px] my-auto overflow-y-scroll flex flex-col items-start gap-24 lg:gap-32 py-8 lg:px-4 p-6"
          id="contentDisplay"
        >
          <div className="content-section" data-tab="About Me" id="AboutMe">
            <AboutMe />
          </div>
          <div
            className="content-section"
            data-tab="Experience"
            id="Experience"
          >
            <Experience />
          </div>
          <div className="content-section" data-tab="Projects" id="Projects">
            <Project />
          </div>
          <div className="content-section" data-tab="Contact" id="Contact">
            <Contacts />
          </div>
        </div>
        {/* sidebar */}
        <div className="w-[20%] hidden h-fit min-h-[580px] my-auto lg:flex flex-col items-start justify-start gap-6 border-l border-l-slate-600 dark:border-l-slate-50 pt-8 px-4">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              delay: 2,
              x: { duration: 2.5 },
            }}
            className="w-fit h-fit flex flex-row items-center gap-2 text-lg uppercase font-semibold cursor-pointer transition-all ease-in duration-200"
            onClick={toggleDarkMode}
          >
            <span>
              <i className={`fa-solid fa-${!darkMode ? "moon" : "sun"}`}></i>
            </span>
            <span>{!darkMode ? "DARK" : "LIGHT"}</span>
          </motion.button>

          <div className="w-full h-fit flex flex-col items-start justify-center gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 2.25,
                x: { duration: 2.5 },
              }}
              onClick={() => handleTabClick("About Me")}
              className={`w-fit text-xl capitalize font-semibold px-4   cursor-pointer ${
                activeTab === "About Me"
                  ? "dark:text-slate-50 text-stone-900"
                  : "dark:text-slate-300 text-stone-400 hover:text-stone-700  dark:hover:text-slate-200"
              }`}
            >
              <span>About Me</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 2.5,
                x: { duration: 2.5 },
              }}
              onClick={() => handleTabClick("Experience")}
              className={`w-fit text-xl capitalize font-semibold px-4 cursor-pointer ${
                activeTab === "Experience"
                  ? "dark:text-slate-50 text-stone-900"
                  : "dark:text-slate-300 text-stone-400 hover:text-stone-700  dark:hover:text-slate-200"
              }`}
            >
              <span>experience</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 2.75,
                x: { duration: 2.5 },
              }}
              onClick={() => handleTabClick("Projects")}
              className={`w-fit text-xl capitalize font-semibold px-4 cursor-pointer ${
                activeTab === "Projects"
                  ? "dark:text-slate-50 text-stone-900"
                  : "dark:text-slate-300 text-stone-400 hover:text-stone-700  dark:hover:text-slate-200"
              }`}
            >
              <span>projects</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                delay: 3,
                x: { duration: 2.5 },
              }}
              onClick={() => handleTabClick("Contact")}
              className={`w-fit text-xl capitalize font-semibold px-4 cursor-pointer ${
                activeTab === "Contact"
                  ? "dark:text-slate-50 text-stone-900"
                  : "dark:text-slate-300 text-stone-400 hover:text-stone-700  dark:hover:text-slate-200"
              }`}
            >
              <span>contact</span>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              delay: 2.25,
              x: { duration: 2.5 },
            }}
            type="button"
            onClick={handleDownloadResume}
            className="w-fit h-fit mt-auto mb-6 px-3 p-2 font-semibold flex items-center flex-row justify-center gap-2 border dark:border-slate-50  border-slate-700 capitalize rounded-md"
          >
            Download resume
            <span className="animate-bounce">
              <i className="fa-solid fa-download"></i>
            </span>
          </motion.button>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
