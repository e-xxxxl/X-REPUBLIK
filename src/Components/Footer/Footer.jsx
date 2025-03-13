import React from "react";
import { FaWhatsapp, FaXTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

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
          © 2025. X Republik. TAG WURLD. TAG MEDIA. AEC
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4">
          <span className="text-xs md:text-sm font-semibold uppercase">Socials:</span>
          <div className="flex gap-3">
            <a href="https://wa.me/+2348109072755?text=Name:%20%0AEmail:%20%0APhone:%20%0AMessage:%20I%20need%20help!%0Aℹ%20From%20X%20Republic" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            </a>
            <a href="https://x.com/tagwurld?t=PhfeofJII_6VOUHF-6f_1Q&s=09" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/tag.wulrd?igsh=d2JsYjhuYTlzODh5" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            </a>
            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            </a>
            <a href="https://www.tiktok.com/@tagtotheworld?_t=ZM-8ueVf686D2t&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            </a>
            <a href="https://snapchat.com/t/3uSfBmET" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost className="text-red-600 hover:text-red-500 text-base md:text-lg cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
