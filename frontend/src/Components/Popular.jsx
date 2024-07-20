import React, { useEffect, useState } from "react";
import Item from "./Item/Item.jsx";

const Popular = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://glamgait-ecommerce-backend.vercel.app/allproducts"
      );
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-200 dark:bg-gray-900 text-gray-800 h-auto py-12">
      <h1 className="text-4xl font-bold pt-4 dark:text-gray-50 pb-6 text-start mx-6">
        TRENDING FOOTWEAR
      </h1>
      <div className="flex flex-nowrap overflow-x-auto scrollbar-hide w-full h-auto px-4 mt-2">
        {allProducts.slice(0, 10).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
