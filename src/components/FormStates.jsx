import React from "react";

const FormStates = () => {
  return (
    <form className="w-full mt-2 h-full flex flex-col items-start gap-4">
      <div className="w-full flex flex-row items-center justify-start gap-4">
        <label className="block w-[50%]">
          <span className="block text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
            Firstname
          </span>

          <input
            type="text"
            placeholder="First Name"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all ease-in-out duration-300"
          />
        </label>

        <label className="block w-[50%]">
          <span className="block text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
            Lastname
          </span>

          <input
            type="text"
            placeholder="Last Name"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all ease-in-out duration-300"
          />
        </label>
      </div>

      <label className="block w-full">
        <span className="lock text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
          Email Address
        </span>
        <input
          type="email"
          placeholder="you@gmail.com"
          className="peer mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400 invalid:border-pink-500 dark:invalid:border-fuchsia-500 invalid:text-pink-600 dark:invalid:text-fuchsia-500
           focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all ease-in-out duration-300"
        />
        <p class="mt-2 hidden peer-invalid:block text-pink-600 dark:text-fuchsia-500  text-sm">
          Please provide a valid email address.
        </p>
      </label>

      <label className="block w-full">
        <span className="block text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
          Descriptive Message
        </span>
        <textarea
          rows={5}
          placeholder="Enter your message here..."
          className="peer resize-none mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400  transition-all ease-in-out duration-300"
        />
      </label>

      <button
        type="button"
        className="w-fit px-4 p-2 text-lg font-semibold rounded-md hover:dark:bg-slate-100 hover:bg-stone-950 hover:text-slate-50 text-stone-950 border-stone-950 dark:hover:text-stone-900 dark:bg-transparent hover:bg-transparent dark:text-slate-50 dark:border-slate-50 border transition-all ease-in duration-200 active:scale-110 ml-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default FormStates;
