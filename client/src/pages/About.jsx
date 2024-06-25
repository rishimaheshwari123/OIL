import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Culture from "../components/core/homepage/Culture";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xl font-bold text-orange-500">Kachi Ghani Oil</p>
        <p className="text-2xl lg:text-4xl mt-3">
          Your Trusted Source for Quality Agricultural Products and Spices
        </p>
        <div className="grid gap-5 mt-7 text-sm">
          <p>
            Kachi Ghani Oil is a leading manufacturer and supplier of
            agricultural products and spices, dedicated to providing
            high-quality goods to customers worldwide. With years of experience
            in the industry, we have established ourselves as a trusted name
            known for our commitment to excellence and customer satisfaction.
          </p>
          <p>
            Our company specializes in the production and distribution of a
            diverse range of agricultural commodities, including grains, beans,
            and peas. We also offer an extensive selection of premium-quality
            spices, carefully sourced and processed to preserve their natural
            flavor and aroma.
          </p>
          <p>
            At Kachi Ghani Oil, we prioritize quality and adhere to stringent
            standards throughout the manufacturing process. From sourcing raw
            materials to packaging the final products, every step is
            meticulously monitored to ensure consistency and freshness.
          </p>
          <p>
            In addition to our focus on quality, we are also dedicated to
            sustainability and ethical business practices. We work closely with
            farmers and suppliers to promote responsible farming methods and
            support local communities.
          </p>
          <p>
            Our commitment to customer satisfaction extends beyond the quality
            of our products. We strive to provide exceptional service, with
            prompt delivery and responsive support, to meet the unique needs of
            our clients.
          </p>
        </div>
      </div>

      <Culture />
      <Footer />
    </div>
  );
};

export default About;
