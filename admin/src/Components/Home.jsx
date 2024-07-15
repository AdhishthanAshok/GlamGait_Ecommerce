import React from "react";
import welcome_gif from "../assets/welcome.gif";

const Home = () => {
  return (
    <div className="flex flex-col pt-10 items-center h-screen w-full dark:bg-gray-800">
      <h1 className="text-4xl font-bold dark:text-gray-50">Welcome Back</h1>
      <h2 className="text-4xl pt-5 text-green-500">Admin</h2>
      <img src={welcome_gif} alt="" className="h-40 w-40" />
    </div>
  );
};

export default Home;
