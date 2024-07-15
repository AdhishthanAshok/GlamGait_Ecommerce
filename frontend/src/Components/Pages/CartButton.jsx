import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const CartButton = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate total number of items in the cart
  const totalItems = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <Link to="/cart" className="relative inline-block dark:text-gray-50">
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
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
