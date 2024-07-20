import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price, category }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-40 md:w-56 flex-shrink-0 flex-wrap h-auto flex flex-col justify-center bg-white items-center text-center shadow-lg gap-1 mx-2 p-4 hover:scale-105 active:scale-100 rounded-lg">
      <Link to={`/product/${id}`} onClick={handleClick}>
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="w-32"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium mt-2">
          {name}
        </p>
        <div className="flex justify-center items-center">
          <div className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
            ₹{new_price}
          </div>
          <div className="text-gray-400 text-sm sm:text-base md:text-lg font-medium line-through ml-2">
            ₹{old_price}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
