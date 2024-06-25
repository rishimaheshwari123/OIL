import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import axios from "axios";
import Whatsapp from "../components/core/product/Whatsapp";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product/getAll`
      );

      if (response?.data?.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 my-10">
        <p className="text-3xl font-bold text-center uppercase mb-10">
          Here are our products
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {products.length > 0 ? (
            products.map((currElem, index) => (
              <div
                key={index}
                className="bg-white shadow-lg shadow-red-700 rounded-lg overflow-hidden"
              >
                <img
                  src={currElem.image}
                  alt="not found"
                  className="w-full h-[50vh] object-contain -mt-12"
                />
                <div className="p-4 ">
                  <p className="text-2xl font-bold">{currElem.name}</p>
                  <div className="flex justify-between my-2">
                    <span className="text-green-600 text-xl font-semibold mt-4">
                      ₹{currElem.price}
                    </span>
                    <span className="text-gray-500 text-xl line-through mt-4">
                      ₹{currElem.highestPrice}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mt-5">{currElem.desc}</p>
                </div>
                <Whatsapp />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No Product found
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
