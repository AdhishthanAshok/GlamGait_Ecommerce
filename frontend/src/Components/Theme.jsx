import React from "react";
import { flushSync } from "react-dom";
import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";
import { useState, useEffect, useRef } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const ref = useRef(null);

  const toggleDarkMode = async () => {
    if (!ref.current) return;

    const newDarkMode = !darkMode;
    await document.startViewTransition(() => {
      flushSync(() => {
        setDarkMode(newDarkMode);
      });
    }).ready;

    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDarkMode(newDarkMode);
      return;
    }

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="bg-gray-50 dark:bg-gray-900 rounded-lg text-sm px-4 py-2 text-"
      ref={ref}
    >
      <button
        onClick={toggleDarkMode}
        className={`bg-${darkMode ? "gray-900" : "br-gray-50"} text-${
          darkMode ? "" : "gray-900"
        } dark:bg-${darkMode ? "" : "gray-900"} dark:text-${
          darkMode ? "gray-900" : "br-gray-50"
        } font-bold py-2 px-4 rounded-lg hover:bg-${
          darkMode ? "gray-900" : "gray-200"
        } dark:hover:bg-${
          darkMode ? "gray-200" : "gray-700"
        } transition duration-700`}
      >
        {darkMode ? (
          <>
            <img
              src={sunIcon}
              alt="Sun Icon"
              className="w-10 h-10 mr-1 border-white "
            />
          </>
        ) : (
          <>
            <img
              src={moonIcon}
              alt="Moon Icon"
              className="w-10 h-10 mr-1 border-black "
            />
          </>
        )}
      </button>
    </div>
  );
};

export default Theme;
