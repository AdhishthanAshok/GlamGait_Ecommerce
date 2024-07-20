import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login FUnction Executed", formData);
    let responseData;
    await fetch("https://glamgait-ecommerce-backend.vercel.app/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      toast.success("Login Successfully!");
      localStorage.setItem("auth-token", responseData.token);
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);
    } else {
      if (Array.isArray(responseData.errors)) {
        responseData.errors.forEach((error) => toast.error(error));
      } else {
        toast.error(responseData.errors);
      }
    }
  };
  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch("https://glamgait-ecommerce-backend.vercel.app/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      toast.success("Sign up Successfully!");
      localStorage.setItem("auth-token", responseData.token);
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);
    } else {
      if (Array.isArray(responseData.errors)) {
        responseData.errors.forEach((error) => toast.error(error));
      } else {
        toast.error(responseData.errors);
      }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-wider uppercase  text-gray-900 md:text-2xl dark:text-white">
              {state}
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {state === "Sign up" ? (
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="username"
                    value={formData.username}
                    onChange={changeHandler}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Abc Xyz"
                    required=""
                  />
                </div>
              ) : (
                <></>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgotpassword"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-50"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  state === "Login" ? login() : signup();
                }}
                className="w-full text-lg font-medium py-2 rounded-lg  bg-blue-500 hover:bg-blue-600 text-white"
              >
                Continue
              </button>
              {state === "Sign up" ? (
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      setState("Login");
                    }}
                    className="font-medium cursor-pointer text-primary-600 hover:underline dark:text-gray-50"
                  >
                    Login here
                  </span>
                </p>
              ) : (
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <span
                    onClick={() => {
                      setState("Sign up");
                    }}
                    className="font-medium cursor-pointer text-primary-600 hover:underline dark:text-gray-50"
                  >
                    Sign up
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
