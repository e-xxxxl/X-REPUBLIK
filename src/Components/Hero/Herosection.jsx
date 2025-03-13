import React from "react";
import heroimage from "../../assets/images/test1.jpg";

const HeroSection = () => {
  return (
    <section className="relative hero-img h-screen flex items-center justify-center bg-black mt-[-315px]">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80" 
        style={{ backgroundImage: `url(${heroimage})` }} // Fix applied here
      ></div>

      {/* Join Waitlist Button */}
      <button className="relative z-10 px-6 py-3 text-white font-bold bg-green-500  shadow-lg hover:bg-green-600 transition-all">
        JOIN OUR WAITLIST
      </button>
    </section>
  );
};

export default HeroSection;
