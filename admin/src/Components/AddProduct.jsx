import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    setLoading(true); // Set loading to true
    let responseData;
    const product = { ...productDetails, image }; // Initialize image as empty

    const formData = new FormData();
    formData.append("product", image); // Append the image file

    try {
      // Upload image first
      const uploadResponse = await fetch(
        `https://glamgait-ecommerce-backend.onrender.com/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      responseData = await uploadResponse.json();

      // If image upload is successful
      if (responseData.success) {
        product.image = responseData.image_url; // Update product with image URL

        // Send product details to add to the database
        const addProductResponse = await fetch(
          `https://glamgait-ecommerce-backend.onrender.com/addproduct`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          toast.success("Product Added Successfully!");
        } else {
          toast.error("Failed to add product.");
        }
      } else {
        toast.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding the product.");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="flex flex-col pt-5 items-center gap-6 dark:bg-gray-800 w-full h-screen px-4">
      <ToastContainer />
      <div className="w-full max-w-md">
        <label
          htmlFor="name"
          className="block text-md font-medium text-gray-900 dark:text-white mb-1"
        >
          Product Name
        </label>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="NIKE Running Shoe"
          name="name"
          required
        />
      </div>
      <div className="w-full max-w-md flex flex-row gap-2">
        <div className="w-1/2">
          <label
            htmlFor="old_price"
            className="block text-md font-medium text-gray-900 dark:text-white mb-1"
          >
            Price
          </label>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Type here.."
            name="old_price"
            required
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="new_price"
            className="block text-md font-medium text-gray-900 dark:text-white mb-1"
          >
            Offer Price
          </label>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Type here.."
            name="new_price"
            required
          />
        </div>
      </div>
      <div className="w-full max-w-md">
        <label
          htmlFor="category"
          className="block text-md font-medium text-gray-900 dark:text-white mb-1"
        >
          Product Category
        </label>
        <select
          name="category"
          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          value={productDetails.category}
          onChange={changeHandler}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="w-full max-w-md flex flex-col">
        <label
          className="block text-md font-medium text-gray-900 dark:text-white mb-2"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="text-sm w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4"
          type="file"
          onChange={handleImageChange}
        />
        <button
          onClick={Add_Product}
          type="button"
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 flex justify-center items-center"
        >
          {loading ? <ClipLoader size={20} color="#fff" /> : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
