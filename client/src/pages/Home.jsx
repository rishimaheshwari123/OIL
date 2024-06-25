import React from "react";
import Slider from "../components/common/Slider";
import ProductSlidebar from "../components/common/ProductSlidebar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Features from "../components/core/homepage/Features";
import Culture from "../components/core/homepage/Culture";

const slides = [
  {
    image:
      "https://doublehiranoil.in/wp-content/uploads/2023/04/Double-Hiran-Blog-Why-Kachi-Ghani-Mustard-Oil-Is-Better-Than-Refined-Oil.jpeg",
  },
  {
    image:
      "https://newspaperads.ads2publish.com/wp-content/uploads/2017/10/saloni-kachchi-ghani-pure-mustard-oil-ad-dainik-jagran-agra-21-10-2017.png",
  },
  {
    image:
      "https://doublehiranoil.in/wp-content/uploads/2023/04/Double-Hiran-Blog-Why-Kachi-Ghani-Mustard-Oil-Is-Better-Than-Refined-Oil.jpeg",
  },
  {
    image:
      "https://newspaperads.ads2publish.com/wp-content/uploads/2017/10/saloni-kachchi-ghani-pure-mustard-oil-ad-dainik-jagran-agra-21-10-2017.png",
  },
  {
    image:
      "https://doublehiranoil.in/wp-content/uploads/2023/04/Double-Hiran-Blog-Why-Kachi-Ghani-Mustard-Oil-Is-Better-Than-Refined-Oil.jpeg",
  },
  {
    image:
      "https://newspaperads.ads2publish.com/wp-content/uploads/2017/10/saloni-kachchi-ghani-pure-mustard-oil-ad-dainik-jagran-agra-21-10-2017.png",
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
      <ProductSlidebar slides={slides} />
      <Culture />
      <Footer />
    </>
  );
};

export default Home;
