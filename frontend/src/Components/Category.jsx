import React from "react";
import w_img from "./assets/WOMEN_Category.png";
import m_img from "./assets/Men_category.webp";
import k_img from "./assets/Kid_category.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col md:flex-col text-center bg-gray-300 dark:bg-gray-900">
      <p className="py-5 text-4xl dark:text-white">CATEGORIES</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center pb-5 tracking-wider">
        <div className="sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  mx-1">
          <img className="rounded-t-lg" src={w_img} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              WOMEN
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Step into elegance and comfort with our collection of women's
              shoes, designed to elevate every stride.
            </p>
            <Link
              to="/womens"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              SHOP NOW
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-1">
          <img className="rounded-t-lg" src={k_img} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              KIDS
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Explore fun and comfortable kids' shoes designed to keep up with
              every adventure and playtime.
            </p>
            <Link
              to="/kids"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              SHOP NOW
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-1">
          <img className="rounded-t-lg" src={m_img} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              MEN
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Discover sophistication and performance with our collection of
              men's shoes, crafted for style and durability.
            </p>
            <Link
              to="/mens"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              SHOP NOW
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
