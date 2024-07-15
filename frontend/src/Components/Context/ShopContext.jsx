import React, { createContext, useState } from "react";
import data_product from "../assets/data.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= data_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updatedCart);
      return updatedCart;
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeEntireItem = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: 0 };
      return updatedCart;
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = data_product.find(
          (product) => product.id === Number(item)
        );

        if (itemInfo) {
          totalAmount += parseFloat(itemInfo.new_price) * cartItems[item];
        }
      }
    }

    return totalAmount;
  };
  const contextValue = {
    data_product,
    cartItems,
    addToCart,
    removeFromCart,
    removeEntireItem,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
