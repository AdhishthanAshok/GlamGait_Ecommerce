import React, { useState } from "react";

function Shoe() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }&query=shoes&count=6`
      );

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const jsonRes = await response.json();
      setUrls(jsonRes.map((item) => item.urls.small));
      setError(false); // Reset error on successful fetch
    } catch {
      setError(true);
    }
  };

  return (
    <div className="h-full py-10 w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2">
        {error ? (
          <p className="text-lg col-span-full dark:text-gray-200 ">
            Try After One Hour, Request Queue is Full
          </p>
        ) : (
          urls.map((url, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={url}
                className="h-56 w-full object-contain"
                alt={`Shoe ${index}`}
              />
            </div>
          ))
        )}
      </div>
      <button
        className="mt-5 text-white bg-green-700 hover:bg-green-800 active:bg-green-700 active:scale-105 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={fetchData}
      >
        Generate!
      </button>
      <p className="mt-5 text-gray-700 dark:text-gray-200 ">
        Click to Generate Random Shoe Images
      </p>
    </div>
  );
}

export default Shoe;
