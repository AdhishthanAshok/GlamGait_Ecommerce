import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded shadow-lg">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded "
      >
        Close
      </button>
    </div>
  </div>
);

const ContactMe = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setPopupMessage("Message sent successfully!");
        },
        (error) => {
          setPopupMessage(`Failed to send message: ${error.text}`);
        }
      );
  };

  const closePopup = () => {
    setPopupMessage("");
  };

  return (
    <div className="mt-28 mx-auto md:px-6 bg-gray-50 dark:bg-gray-900 tracking-wide">
      {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
      <section>
        <div className="block rounded-lg bg-gray-50 px-6 py-12  dark:bg-[hsla(0,0%,5%,0.7)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
          <div className="flex flex-row justify-center mb-10">
            <div className="mx-auto mb-12 text-center lg:mb-0">
              <a
                href="https://maps.google.com/?q=India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                <h6 className="font-medium dark:text-neutral-200">India</h6>
              </a>
            </div>
            <div className="mx-auto mb-12 text-center lg:mb-0">
              <a
                href="https://maps.google.com/?q=Sector 22, Noida, 201301"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h6 className="font-medium dark:text-neutral-200">
                  Noida, 201301
                </h6>
              </a>
            </div>
            <div className="mx-auto mb-6 text-center md:mb-0">
              <a
                href="https://wa.me/919068287133"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h6 className="font-medium dark:text-white">+91 9068287133</h6>
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-[700px]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid gap-6 mb-6 md:grid-cols-2 tracking-wide text-4xl">
                <div>
                  <label
                    htmlFor="first_name"
                    className="inline mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border tracking-widest border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="John"
                    name="user_name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="inline mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 tracking-widest text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Type - if not"
                    required
                  />
                </div>
              </div>
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 tracking-widest text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="xyz@gmail.com"
                  name="user_email"
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 tracking-widest bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Write your thoughts here..."
                  name="message"
                ></textarea>
              </div>
              <div className="mb-6 flex items-center justify-center">
                <input
                  type="submit"
                  value="Send"
                  className="text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-white"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
