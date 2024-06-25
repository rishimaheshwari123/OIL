import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OpenRoute from "./components/Admin/auth/OpenRoute";
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import Login from "./components/Admin/pages/Login";
import AdminGallery from "./components/Admin/pages/AdminGallery";
import Layout from "./components/Admin/pages/Layout";
import Dashboard from "./components/Admin/pages/Dashboard";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import AddProduct from "./components/Admin/pages/AddProduct";
import GetProduct from "./components/Admin/pages/GetProduct";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/getProduct" element={<GetProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
