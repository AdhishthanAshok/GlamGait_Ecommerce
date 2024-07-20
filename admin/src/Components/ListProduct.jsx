import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://glamgait-ecommerce-backend.vercel.app/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleRemoveProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(id);
      }
    });
  };

  const removeProduct = async (id) => {
    await fetch("https://glamgait-ecommerce-backend.vercel.app/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAllProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
          );
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
        } else {
          Swal.fire(
            "Failed!",
            "There was an error deleting your product.",
            "error"
          );
        }
      });
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800 dark:text-gray-50 h-screen">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4 text-center">All Products List</h1>
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white dark:bg-gray-700">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b text-red-500">Old Price</th>
              <th className="py-2 px-4 border-b text-green-600">New Price</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">
                  <a href={product.image} target="_blank">
                    <img
                      className="mx-auto h-12 w-12 object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                </td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b text-red-500  line-through">
                  ₹{product.old_price}
                </td>
                <td className="py-2 px-4 border-b text-green-600">
                  ₹{product.new_price}
                </td>
                <td className="py-2 px-4 border-b uppercase">
                  {product.category}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/emoji/48/cross-mark-button-emoji.png"
                      alt="cross-mark-button-emoji"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
