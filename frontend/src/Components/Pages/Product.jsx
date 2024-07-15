import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";

const Product = () => {
  const { data_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = data_product.find((e) => e.id === Number(productId));
  const { addToCart } = useContext(ShopContext);

  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product.id);
    setAddedToCart(true);
  };

  return (
    <section className="py-8 bg-gray-100 md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="flex flex-col items-center md:flex-row md:justify-around ">
          <img
            className="w-56 rounded-lg scale-x transition-transform duration-300 hover:scale-x-[-1]"
            src={product.image}
            alt={product.name}
          />

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Category: {product.category}
            </p>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ₹{product.new_price}
              </p>
              <p className="text-xl text-gray-500 line-through sm:text-2xl dark:text-gray-400 ml-4">
                ₹{product.old_price}
              </p>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                className={`text-gray-50 dark:text-gray-50 mt-4 sm:mt-0 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center ${
                  addedToCart
                    ? "bg-gray-400"
                    : "bg-green-500 hover:bg-green-600"
                }`}
                onClick={handleAddToCart}
                disabled={addedToCart}
              >
                {addedToCart ? (
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#065F46"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 12l6 6L18 6"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                )}
                {addedToCart ? "Added to cart" : "Add to cart"}
              </button>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
            Reviews
          </h2>
          <div className="flex flex-col md:flex-row justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="border p-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-400">
                "{product.review1}"
              </p>
            </div>
            <div className="border p-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-400">
                "{product.review2}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
