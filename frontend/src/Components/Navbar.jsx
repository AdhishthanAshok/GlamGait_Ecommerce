import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BellIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import logo_img_dark from "./assets/logo_dark.jpg";
import logo_img_light from "./assets/logo_light.png";
import profile_img from "./assets/profile_icon.png";
import Theme from "./Theme.jsx";
import CartButton from "./Pages/CartButton.jsx";
import hello_gif from "../Components/assets/hello_gif.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navigation = [
  { name: "Shop", to: "/", current: true },
  { name: "Men", to: "/mens", current: false },
  { name: "Women", to: "/womens", current: false },
  { name: "Kids", to: "/kids", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [menu, setMenu] = useState("Shop");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-1/5">
      <ToastContainer />
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-8">
          <div className="flex justify-end mx-auto sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center gap-2">
                <Link to="/">
                  <img
                    className="h-10 w-auto hover:scale-125"
                    src={darkMode ? logo_img_dark : logo_img_light}
                    alt="Your Company"
                  />
                </Link>
                <Link to="/shoe">
                  <img
                    className="h-9 w-9 hover:scale-110 rounded-lg"
                    src={hello_gif}
                    alt="Hello Welcome"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMenu(item.name)}
                    className={classNames(
                      menu === item.name
                        ? "bg-gray-700 text-white dark:text-gray-50"
                        : "text-black hover:bg-gray-800 hover:text-white dark:text-gray-50",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartButton />
            <div className="relative ml-3">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={profile_img}
                  alt="Profile"
                />
              </button>
              {profileOpen && (
                <div className="absolute dark:bg-gray-900 mt-2 w-44 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {localStorage.getItem("auth-token") ? (
                    <button
                      onClick={() => {
                        localStorage.removeItem("auth-token");
                        setTimeout(() => {
                          window.location.replace("/");
                        }, 1500);
                        toast.success("Log out Successfully!");
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-blue-500 active:text-blue-950 dark:text-gray-50 dark:hover:text-blue-500 dark:active:text-blue-400"
                    >
                      Log out
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block px-4 hover:text-blue-500 active:text-blue-950 dark:hover:text-blue-500 dark:active:text-blue-400 py-2 text-sm text-gray-700 dark:text-gray-50"
                    >
                      Login
                    </Link>
                  )}
                </div>
              )}
            </div>
            <Theme />
          </div>
        </div>
        {open && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => {
                    setMenu(item.name);
                    setOpen(false);
                  }}
                  className={classNames(
                    menu === item.name
                      ? "bg-gray-900 text-gray-50 sm:dark:text-gray-50 dark:bg-gray-800 dark:text-gray-50"
                      : "text-gray-600 hover:bg-gray-700 hover:text-gray-400",
                    "block rounded-md px-3 py-2 text-base font-medium dark:text-gray-400"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
