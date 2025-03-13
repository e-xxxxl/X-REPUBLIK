import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../../assets/images/repubbb.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAboutTagDropdownOpen, setIsAboutTagDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="X Republik Logo" className="h-17 w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-semibold">
            <li className="text-[#FF0000]"><a href="#">HOME</a></li>

            {/* ABOUT Dropdown */}
            <li 
              className="relative group cursor-pointer" 
              onMouseEnter={() => setIsAboutDropdownOpen(true)} 
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <a className="hover:text-[#FF0000] flex items-center">
                ABOUT <ChevronDown size={16} className="ml-1" />
              </a>
              <ul
                className={`absolute left-0 mt-2 w-52 bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg ${
                  isAboutDropdownOpen ? "opacity-100 visible" : "invisible"
                }`}
              >
                <li className="px-4 py-2 hover:bg-[#FF0000]"><a href="#">ABOUT US</a></li>

                {/* ABOUT TAG - Nested Dropdown */}
                <li 
                  className="relative px-4 py-2 hover:bg-[#FF0000] flex justify-between items-center cursor-pointer"
                  onMouseEnter={() => setIsAboutTagDropdownOpen(true)} 
                  onMouseLeave={() => setIsAboutTagDropdownOpen(false)}
                >
                  ABOUT TAG <ChevronRight size={16} />
                  <ul
                    className={`absolute left-full top-0 mt-0 w-48 bg-black text-white transition-all duration-300 shadow-lg ${
                      isAboutTagDropdownOpen ? "opacity-100 visible" : "invisible"
                    }`}
                  >
                    <li className="px-4 py-2 hover:bg-[#FF0000]"><a href="#">MEET THE TEAM</a></li>
                    <li className="px-4 py-2 hover:bg-[#FF0000]"><a href="#">MEET THE EVENT CREW</a></li>
                  </ul>
                </li>

                <li className="px-4 py-2 hover:bg-[#FF0000]"><a href="#">HOW TO GET HERE?</a></li>
                <li className="px-4 py-2 hover:bg-[#FF0000]"><a href="#">XREPUBLIK RULES</a></li>

                {/* BLOG - Nested Dropdown */}
                <li 
                  className="relative px-4 py-2 hover:bg-[#FF0000] flex justify-between items-center cursor-pointer"
                  onMouseEnter={() => setIsBlogDropdownOpen(true)} 
                  onMouseLeave={() => setIsBlogDropdownOpen(false)}
                >
                  BLOG <ChevronRight size={16} />
                  <ul
                    className={`absolute left-full top-0 mt-0 w-48 bg-black text-white transition-all duration-300 shadow-lg ${
                      isBlogDropdownOpen ? "opacity-100 visible" : "invisible"
                    }`}
                  >
                    <li className="px-4 py-2 hover:bg-[#FF0000]"><a href="#">PAST EVENTS</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="hover:text-[#FF0000]"><a href="#">LINEUP</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">TICKET</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">VENDOR RESERVATION</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">CONTACT US</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">FAQ</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-black text-white absolute top-full left-0 w-full shadow-md transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li className="text-[#FF0000]"><a href="#">HOME</a></li>

            {/* ABOUT Dropdown in Mobile */}
            <li className="cursor-pointer flex justify-between items-center py-2 border-b border-gray-700" 
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
            >
              ABOUT <ChevronDown size={16} />
            </li>
            {isAboutDropdownOpen && (
              <ul className="pl-4 space-y-2">
                <li className="py-2 hover:text-[#FF0000]"><a href="#">ABOUT US</a></li>

                {/* ABOUT TAG - Nested Mobile Dropdown */}
                <li 
                  className="cursor-pointer flex justify-between items-center py-2 border-b border-gray-700"
                  onClick={() => setIsAboutTagDropdownOpen(!isAboutTagDropdownOpen)}
                >
                  ABOUT TAG <ChevronDown size={16} />
                </li>
                {isAboutTagDropdownOpen && (
                  <ul className="pl-6 space-y-2">
                    <li className="py-2 hover:text-[#FF0000]"><a href="#">MEET THE TEAM</a></li>
                    <li className="py-2 hover:text-[#FF0000]"><a href="#">MEET THE EVENT CREW</a></li>
                  </ul>
                )}

                <li className="py-2 hover:text-[#FF0000]"><a href="#">HOW TO GET HERE?</a></li>
                <li className="py-2 hover:text-[#FF0000]"><a href="#">XREPUBLIK RULES</a></li>

                {/* BLOG - Nested Mobile Dropdown */}
                <li 
                  className="cursor-pointer flex justify-between items-center py-2 border-b border-gray-700"
                  onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                >
                  BLOG <ChevronDown size={16} />
                </li>
                {isBlogDropdownOpen && (
                  <ul className="pl-6 space-y-2">
                    <li className="py-2 hover:text-[#FF0000]"><a href="#">PAST EVENTS</a></li>
                  </ul>
                )}
              </ul>
            )}

            <li className="hover:text-[#FF0000]"><a href="#">LINEUP</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">TICKET</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">VENDOR RESERVATION</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">CONTACT US</a></li>
            <li className="hover:text-[#FF0000]"><a href="#">FAQ</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
