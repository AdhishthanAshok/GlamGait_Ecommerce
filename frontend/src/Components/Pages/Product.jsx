import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext.jsx"; // Adjust this import

const Product = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext); // Use the context to get addToCart
  const [addedToCart, setAddedToCart] = useState(false);
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:4000/allproducts`);
      const data = await response.json();
      const foundProduct = data.find((item) => item.id === Number(productId));
      setProduct(foundProduct);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product.id);
      setAddedToCart(true);
    } else {
      console.error("addToCart function is not available.");
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-8 bg-gray-100 md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="flex flex-col items-center md:flex-row md:justify-around">
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
                {addedToCart ? "Added to cart" : "Add to cart"}
              </button>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
