import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo_img_dark from "./assets/logo_dark.jpg";
import logo_img_light from "./assets/logo_light.png";
import profile_img from "./assets/profile_icon.png";
import Theme from "./Theme.jsx";
import CartButton from "./Pages/CartButton.jsx";
import hello_gif from "../Components/assets/hello_gif.gif";

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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-1/5">
      <Disclosure as="nav" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {({ open }) => (
          <>
            <div>
              <div className="flex justify-between items-center gap-8">
                <div className="flex justify-end mx-auto sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                  {/* Mobile menu button */}
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
                  {/* Navigation links */}
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
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profile_img}
                        alt=""
                      />
                    </Menu.Button>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute dark:bg-gray-900 mt-2 w-44 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {isLoggedIn ? (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/profile"
                                  className={classNames(
                                    active
                                      ? "bg-gray-200 dark:bg-gray-700"
                                      : "",
                                    "block px-4 py-2 text-sm text-gray-700 dark:text-gray-50"
                                  )}
                                >
                                  Your Profile
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/logout"
                                  className={classNames(
                                    active
                                      ? "bg-gray-200 dark:bg-gray-700"
                                      : "",
                                    "block px-4 py-2 text-sm text-gray-700 dark:text-gray-50"
                                  )}
                                >
                                  Sign out
                                </Link>
                              )}
                            </Menu.Item>
                          </>
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={classNames(
                                  active ? "bg-gray-200 dark:bg-gray-700" : "",
                                  "block px-4 py-2 text-sm text-gray-700 dark:text-gray-50"
                                )}
                              >
                                Login
                              </Link>
                            )}
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <Theme />
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMenu(item.name)}
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
