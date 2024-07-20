import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://glamgait-ecommerce-backend.vercel.app/allproducts"
      );
      const data = await response.json();
      setAllProducts(data);
      setCartItems(getDefaultCart(data.length)); // Initialize cart based on number of products

      if (localStorage.getItem("auth-token")) {
        fetch("https://glamgait-ecommerce-backend.vercel.app/getcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: "",
        })
          .then((response) => response.json())
          .then((data) => setCartItems(data));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getDefaultCart = (productCount) => {
    let cart = {};
    for (let index = 1; index <= productCount; index++) {
      cart[index] = 0;
    }
    return cart;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1, // Default to 0 if undefined
      };
      if (localStorage.getItem("auth-token")) {
        fetch("https://glamgait-ecommerce-backend.vercel.app/addtocart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("https://glamgait-ecommerce-backend.vercel.app/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const removeEntireItem = (itemId) => {
    setCartItems((prev) => {
      const { [itemId]: removedItem, ...updatedCart } = prev;

      if (localStorage.getItem("auth-token")) {
        fetch(
          "https://glamgait-ecommerce-backend.vercel.app/removeentireitem",
          {
            method: "POST",
            headers: {
              Accept: "application/form-data",
              "auth-token": `${localStorage.getItem("auth-token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemId: itemId }),
          }
        )
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
      return updatedCart;
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find(
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
    allProducts,
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
