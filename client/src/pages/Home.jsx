import React from "react";
import Slider from "../components/common/Slider";
import ProductSlidebar from "../components/common/ProductSlidebar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Features from "../components/core/homepage/Features";
import Culture from "../components/core/homepage/Culture";

import img4 from "../assets/24.jpg";
import img6 from "../assets/26.jpg";
import img7 from "../assets/27.jpg";
import img8 from "../assets/28.jpg";

const slides = [
  {
    image: img4,
  },

  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },

  {
    image: img4,
  },

  {
    image: img6,
  },
];

export const all = [
  {
    image: img4,
  },

  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },

  {
    image: img4,
  },

  {
    image: img6,
  },
];
const Home = () => {
  return (
    <>
      <Navbar />
      <Slider slides={slides} />
      <div className="max-w-7xl mx-auto px-4"></div>
      <br />
      <br />
      <Features />
      <ProductSlidebar slides={all} />
      <Culture />
      <Footer />
    </>
  );
};

export default Home;
