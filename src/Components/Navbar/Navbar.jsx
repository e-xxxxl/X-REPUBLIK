import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
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
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="X Republik Logo" className="h-17 w-auto" />
          </NavLink>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-semibold">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-[#FF0000] font-bold" : "hover:text-[#FF0000]"}>
                HOME
              </NavLink>
            </li>

            {/* ABOUT Dropdown */}
            <li 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsAboutDropdownOpen(true)} 
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <span className="hover:text-[#FF0000] flex items-center">
                ABOUT <ChevronDown size={16} className="ml-1" />
              </span>
              <ul className={`absolute left-0 mt-2 w-52 bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg ${isAboutDropdownOpen ? "opacity-100 visible" : "invisible"}`}>
                <li className="px-4 py-2 hover:bg-[#FF0000]">
                  <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#FF0000] font-bold" : ""}>
                    ABOUT US
                  </NavLink>
                </li>

                {/* ABOUT TAG - Nested Dropdown */}
                <li 
                  className="relative px-4 py-2 hover:bg-[#FF0000] flex justify-between items-center cursor-pointer"
                  onMouseEnter={() => setIsAboutTagDropdownOpen(true)} 
                  onMouseLeave={() => setIsAboutTagDropdownOpen(false)}
                >
                  ABOUT TAG <ChevronRight size={16} />
                  <ul className={`absolute left-full top-0 mt-0 w-48 bg-black text-white transition-all duration-300 shadow-lg ${isAboutTagDropdownOpen ? "opacity-100 visible" : "invisible"}`}>
                    <li className="px-4 py-2 hover:bg-[#FF0000]">
                      <NavLink to="/meet-the-team">MEET THE TEAM</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#FF0000]">
                      <NavLink to="/event-crew">MEET THE EVENT CREW</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#FF0000]">
                      <NavLink to="/download-schedule">DOWNLOAD SCHEDULE</NavLink>
                    </li>
                  </ul>
                </li>

                <li className="px-4 py-2 hover:bg-[#FF0000]">
                  <NavLink to="/how-to-get-here">HOW TO GET HERE?</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-[#FF0000]">
                  <NavLink to="/rules">XREPUBLIK RULES</NavLink>
                </li>

                {/* BLOG - Nested Dropdown */}
                <li 
                  className="relative px-4 py-2 hover:bg-[#FF0000] flex justify-between items-center cursor-pointer"
                  onMouseEnter={() => setIsBlogDropdownOpen(true)} 
                  onMouseLeave={() => setIsBlogDropdownOpen(false)}
                >
                  BLOG <ChevronRight size={16} />
                  <ul className={`absolute left-full top-0 mt-0 w-48 bg-black text-white transition-all duration-300 shadow-lg ${isBlogDropdownOpen ? "opacity-100 visible" : "invisible"}`}>
                    <li className="px-4 py-2 hover:bg-[#FF0000]">
                      <NavLink to="/past-events">PAST EVENTS</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/lineup" className={({ isActive }) => isActive ? "text-[#FF0000] font-bold" : "hover:text-[#FF0000]"}>
                LINEUP
              </NavLink>
            </li>
            <li>
              <NavLink to="/ticket" className={({ isActive }) => isActive ? "text-[#FF0000] font-bold" : "hover:text-[#FF0000]"}>
                TICKET
              </NavLink>
            </li>
            <li>
              <NavLink to="/vendor-reservation" className={({ isActive }) => isActive ? "text-[#FF0000] font-bold" : "hover:text-[#FF0000]"}>
                VENDOR RESERVATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#FF0000] font-bold" : "hover:text-[#FF0000]"}>
                CONTACT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => isActive ? "text-[#FF0000] font-bold" : "hover:text-[#FF0000]"}>
                FAQ
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
