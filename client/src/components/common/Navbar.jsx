// src/components/Navbar.js
import React, { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const pathMatch = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white text-black  w-full z-10 text-sm">
        <div className="max-w-7xl mx-auto px-4 text-xl flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex items-center py-5 px-2 hover:text-gray-300 transition duration-300"
            >
              <div className=" w-[70px] h-[70px] lg:w-16 lg:h-16 ">
                <img
                  src="https://i.ibb.co/6wtWwqk/nechro-pure-farm-oil-m-p-nagar-bhopal-offset-printers-li1sf7va5d-250.webp"
                  alt=""
                  className=" object-cover "
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={` py-5 px-2 ${
                pathMatch("/") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={` py-5 px-2 ${
                pathMatch("/about") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={` py-5 px-2 ${
                pathMatch("/gallery") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/products"
              className={` py-5 px-2 ${
                pathMatch("/services") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Products
            </Link>

            <Link
              to="/contact"
              className={` py-5 px-2 ${
                pathMatch("/contact") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Sidebar for mobile */}
        <div
          className={`fixed inset-y-0 text-xl left-0 w-64 bg-white text-black transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className=" w-[70px] h-[70px] lg:w-16 lg:h-16 flex m-auto mt-3 mb-8 ">
            <img
              src="https://i.ibb.co/6wtWwqk/nechro-pure-farm-oil-m-p-nagar-bhopal-offset-printers-li1sf7va5d-250.webp"
              alt=""
              className=" object-cover "
            />
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className={` px-2 ${
                pathMatch("/") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="border-b-2 border-b-black"></div>
            <Link
              to="/about"
              className={`px-2 ${
                pathMatch("/about") ? "text-red-600 font-bold " : "text-black"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/gallery"
              className={`  px-2 ${
                pathMatch("/gallery") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/products"
              className={` px-2 ${
                pathMatch("/services") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              products
            </Link>

            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/contact"
              className={`  px-2 ${
                pathMatch("/contact") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="border-b-2 border-b-black"></div>
          </div>
        </div>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-0"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
