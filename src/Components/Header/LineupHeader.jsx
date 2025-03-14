import React from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../Navbar/Navbar";

const LineupHeader = () => {
  return (
    <header className="bg-black text-white w-full min-h-[82vh] flex flex-col">
          {/* Navbar */}
          
    
          {/* Hero Section */}
          <div className="flex  wel-text flex-col items-center justify-center flex-grow text-white text-center">
            {/* Welcome Text with Arrow in Front */}
            <h1 className="text-xl md:text-3xl mb-48 font-extrabold uppercase flex items-center gap-2">
              <ChevronDown size={24} className="text-green-500 animate-bounce" />
              2025<span className="text-[#FF0000]">LINE UP</span>
            </h1>
          </div>
        </header>
  );
};

export default LineupHeader;
