import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <footer className="bg-pink-600 py-10 text-xl mt-28">
        <div className="grid px-10 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto gap-16">
          <div className="first grid text-white">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <img
                src="https://i.ibb.co/6wtWwqk/nechro-pure-farm-oil-m-p-nagar-bhopal-offset-printers-li1sf7va5d-250.webp"
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm mb-4 flex gap-3">
              <FaLocationDot size={28} color="orange" />
              <span>
                {" "}
                Shed no. 9, Indira Press Complex, Zone-I, Maharana Pratap Nagar,
                Bhopal, Madhya Pradesh 462011
              </span>
            </p>
            <br />
            <div className="flex gap-3">
              <Link to="/" target="_blank">
                <FaFacebook size={25} className="hover:text-yellow-400" />
              </Link>
              <Link to="/" target="_blank">
                <FaInstagram size={25} className="hover:text-yellow-400" />
              </Link>
              <Link to="/" target="_blank">
                <FaYoutube size={25} className="hover:text-yellow-400" />
              </Link>
              <Link to="/" target="_blank">
                <RiTwitterXFill size={25} className="hover:text-yellow-400" />
              </Link>
            </div>
          </div>

          <div className="second grid gap-4 text-white">
            <p className="text-2xl font-bold">CONTACT US</p>

            <div className="flex items-center gap-2">
              <FaPhoneAlt size={20} color="orange" />
              <span>+91 9827057357</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail size={20} color="orange" />
              <span>test@gmail.com</span>
            </div>
          </div>

          <div className="grid text-white">
            <p className="text-2xl font-bold mb-4">MORE ABOUT US</p>
            <Link to="/about" className="hover:underline mb-2">
              About
            </Link>
            <Link to="/contact" className="hover:underline mb-2">
              Contact
            </Link>
            <Link
              to={token ? "/admin/dashboard" : "/login"}
              className="hover:underline"
            >
              Admin Login
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
      </footer>
    </>
  );
};

export default Footer;
