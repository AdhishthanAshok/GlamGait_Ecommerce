import React from "react";
import Theme from "./Theme.jsx";
import nav_logo_light from "../assets/logo_light.png";
import nav_logo_dark from "../assets/logo_dark.jpg";
import nav_profile from "../assets/profile_icon.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full flex flex-row justify-between items-center md:h-20 sm:h-11 dark:bg-gray-900 pl-2 border-b-2 border-b-gray-200 dark:border-b-gray-700">
      <Link to="/">
        {" "}
        <img
          className="h-14 w-auto"
          src={darkMode ? nav_logo_dark : nav_logo_light}
        />
      </Link>
      <div className="flex flex-row justify-end items-center">
        <img src={nav_profile} className="h-8 w-8 rounded-lg" />
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;
