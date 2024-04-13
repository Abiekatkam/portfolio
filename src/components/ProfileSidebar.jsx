import React from "react";
import ProfileImage from "../assets/abhishek_katkam.jpg";

const ProfileSidebar = () => {
  return (
    <>
      <div className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain overflow-hidden ring-4 ring-slate-600 shadow-2xl dark:ring-slate-100 rounded-md transition-all duration-500 ease-in">
        <img
          // src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          src={ProfileImage}
          alt="Abhishek Kaatkam profile"
          className="w-full h-full object-center grayscale"
        />
      </div>

      <div className="w-fit h-fit transition-all duration-500 ease-in flex flex-col items-start gap-4">
        <div>
          <p className="uppercase lg:text-2xl text-xl text-slate-500 dark:text-slate-300 font-semibold transition-all duration-500 ease-in">
            Hey, I'm
          </p>
          <h1 className="lg:text-6xl text-5xl font-semibold leading-[3rem] text-stone-900 dark:text-slate-50 transition-all duration-500 ease-in">
            Abhishek Katkam
          </h1>
        </div>

        <p className="lg:text-md text-xl uppercase text-slate-500 dark:text-slate-300 font-semibold transition-all duration-500 ease-in">
          frontend developer
        </p>

        <div className="w-full h-fit flex flex-col items-start justify-center gap-1">
          <p className="text-sm uppercase text-slate-500 dark:text-slate-300 font-semibold transition-all duration-500 ease-in mt-2">
            follow me on
          </p>
          <div className="w-full h-fit flex flex-row items-center gap-4">
            <a
              href="https://twitter.com/AbhishekKatkam9"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300 hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-katkam-988744231/"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300 hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/Abiekatkam"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300 hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.instagram.com/_abie._/"
              target="_blank"
              className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300 hover:scale-125 transition-all ease-in duration-200"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
