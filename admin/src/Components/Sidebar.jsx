import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-row justify-center gap-2 pb-4 md:flex-col md:w-56 md:h-screen md:justify-start md:gap-5 bg-gray-200 pt-5  items-center dark:bg-gray-700">
      <Link to="/addproduct" className="dark:text-gray-50">
        <div className="w-44 h-16 rounded-lg flex flex-row gap-2 justify-center bg-gray-400 p-5 dark:text-gray-200 dark:bg-gray-900 hover:bg-green-400 dark:hover:bg-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <p className=""> Add Products</p>
        </div>
      </Link>
      <Link to="/listproduct" className="dark:text-gray-50 ">
        <div className=" w-44 h-16 rounded-lg flex flex-row gap-2 justify-center bg-gray-400 p-5 dark:text-gray-200 dark:bg-gray-900 hover:bg-blue-400 dark:hover:bg-blue-400">
          <img
            src="https://img.icons8.com/?size=100&id=80613&format=png&color=000000"
            className="h-7 w-7 "
          />
          <p>List Products</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
