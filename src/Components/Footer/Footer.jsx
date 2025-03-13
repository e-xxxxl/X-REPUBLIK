import React from "react";
import { FaWhatsapp, FaXTwitter, FaInstagram, FaYoutube, FaTiktok, FaBell } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-12 h-auto flex items-end">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left Section: Terms & Contact */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-xs md:text-sm font-semibold uppercase text-center md:text-left">
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        {/* Center Section: Copyright */}
        <div className="text-xs md:text-sm text-center font-bold uppercase tracking-wide">
          © 2025. X Republik. TAG WURLD. TAG MEDIA. A&C
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4">
          <span className="text-xs md:text-sm font-semibold uppercase">Socials:</span>
          <div className="flex gap-3">
            <FaWhatsapp className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            <FaXTwitter className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            <FaInstagram className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            <FaYoutube className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            <FaTiktok className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            <FaBell className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
