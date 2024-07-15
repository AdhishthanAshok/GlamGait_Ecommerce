import React, { useState } from "react";
import Item from "../Item/Item.jsx";
import data_product from "../assets/data.js";

const ShopCategory = ({ category }) => {
  let products = [];

  switch (category) {
    case "women":
      products = data_product.filter((product) => product.category === "Women");
      break;
    case "men":
      products = data_product.filter((product) => product.category === "Men");
      break;
    case "kids":
      products = data_product.filter((product) => product.category === "Kids");
      break;
    default:
      // Handle default case or error
      break;
  }

  const [visible, setVisible] = useState(8);

  const loadMore = () => {
    setVisible((prevCount) => prevCount + 4);
  };

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 4, 8));
  };

  return (
    <div className="grid justify-items-center dark:bg-gray-900">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-4xl py-6 uppercase dark:text-gray-50">
          Popular in {category}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center hover:border-blue-400 dark:hover:border-blue-400">
          {products.slice(0, visible).map((item) => (
            <Item
              key={item.id} // Ensure a unique key, preferably the product ID
              id={item.id}
              category={category}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
        <div className="text-center my-4 flex justify-center space-x-4">
          <button
            className={`text-lg font-medium py-2 px-6 rounded-md shadow-md ${
              visible < products.length
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 cursor-not-allowed"
            }`}
            onClick={loadMore}
            disabled={visible >= products.length}
          >
            Show More
          </button>
          <button
            className={`text-lg font-medium py-2 px-6 rounded-md shadow-md ${
              visible > 8
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
            onClick={showLess}
            disabled={visible <= 8}
          >
            Show Less
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
