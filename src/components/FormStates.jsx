import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const FormStates = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const ValidInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (firstName == "" || firstName.length <= 4) {
      setValidFirstName(false);
      setValidLastName(true);
      setValidEmail(true);
      setValidMessage(true);
      return false;
    } else if (lastName == "" || lastName.length <= 4) {
      setValidLastName(false);
      setValidFirstName(true);
      setValidEmail(true);
      setValidMessage(true);
      return false;
    } else if (!emailRegex.test(email)) {
      setValidEmail(false);
      setValidFirstName(true);
      setValidLastName(true);
      setValidMessage(true);
      return false;
    } else if (message == "" || message.length <= 2) {
      setValidMessage(false);
      setValidFirstName(true);
      setValidLastName(true);
      setValidEmail(true);
      return false;
    } else {
      setValidFirstName(true);
      setValidLastName(true);
      setValidEmail(true);
      setValidMessage(true);
    }
    return true;
  };

  const SendEmail = (e) => {
    e.preventDefault();
    if (!ValidInput()) {
      return;
    }

    const templateParams = {
      from_name: email,
      to_name: firstName + " " + lastName,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then((response) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        toast.success(
          "Email sent successfully! Thank you for your kind response!"
        );
      })
      .catch((error) => {
        toast.error("Something went wrong! Please try again.");
      });
  };

  return (
    <form
      className="w-full mt-2 h-full flex flex-col items-start gap-4"
      onSubmit={SendEmail}
    >
      <div className="w-full flex lg:flex-row flex-col items-center justify-start lg:gap-4 gap-4">
        <label className="block lg:w-[50%] w-full">
          <span className="block text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
            Firstname
          </span>

          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400 transition-all ease-in-out duration-300"
          />
          <p
            className={`mt-2 ${
              !validFirstName ? "block" : "hidden"
            } peer-invalid:block text-pink-600 dark:text-fuchsia-500 text-sm`}
          >
            Please provide a first name.
          </p>
        </label>

        <label className="block lg:w-[50%] w-full">
          <span className="block text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
            Lastname
          </span>

          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400 transition-all ease-in-out duration-300"
          />
          <p
            className={`mt-2 ${
              !validLastName ? "block" : "hidden"
            } peer-invalid:block text-pink-600 dark:text-fuchsia-500 text-sm`}
          >
            Please provide a last name.
          </p>
        </label>
      </div>

      <label className="block w-full">
        <span className="lock text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
          Email Address
        </span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@gmail.com"
          className="peer mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400 invalid:border-pink-500 dark:invalid:border-fuchsia-500 invalid:text-pink-600 dark:invalid:text-fuchsia-500
           focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all ease-in-out duration-300"
        />
        <p
          className={`mt-2 ${
            !validEmail ? "block" : "hidden"
          } peer-invalid:block text-pink-600 dark:text-fuchsia-500 text-sm`}
        >
          Please provide a valid email address.
        </p>
      </label>

      <label className="block w-full">
        <span className="block text-md font-medium dark:text-slate-100 text-slate-600 transition-all ease-in-out duration-300">
          Descriptive Message
        </span>
        <textarea
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          className="peer resize-none mt-1 block w-full px-3 py-2 bg-white dark:bg-transparent border border-slate-500 dark:border-slate-300 rounded-md text-md shadow-sm placeholder-slate-500 dark:placeholder-slate-400 placeholder:italic focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-400  transition-all ease-in-out duration-300"
        />
        <p
          className={`mt-2 ${
            !validMessage ? "block" : "hidden"
          } peer-invalid:block text-pink-600 dark:text-fuchsia-500 text-sm`}
        >
          Please enter a descriptive message.
        </p>
      </label>

      <button className="w-fit px-4 p-2 text-lg font-semibold rounded-md hover:dark:bg-slate-100 hover:bg-stone-950 hover:text-slate-50 text-stone-950 border-stone-950 dark:hover:text-stone-900 dark:bg-transparent dark:text-slate-50 dark:border-slate-50 border transition-all ease-in duration-200 active:scale-110 ml-auto">
        Submit
      </button>
    </form>
  );
};

export default FormStates;
