import React from "react";
import Sidebar from "./Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./AddProduct.jsx";
import ListProduct from "./ListProduct.jsx";
import Home from "./Home.jsx";

const Admin = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
