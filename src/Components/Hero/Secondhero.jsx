import React from "react";
import backgroundImage from "../../assets/images/secondhero.png"; // Background image
import SideScroll from "../Marquee/SideScroll";

const SecondHero = () => {
  return (
    <section className="relative text-white">
      {/* SideScroll inside the relative container */}
      <SideScroll />

      {/* Hero Background */}
      <div
        className="h-[80vh] second-hero-main md:h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 py-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h5 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight">
          Festival of Lights, <br className="block md:hidden" /> Creativity at its Peak
        </h5>
        <p className="mt-3 sm:mt-4 max-w-md sm:max-w-lg md:max-w-2xl text-xs sm:text-sm md:text-lg leading-relaxed">
          Where young visionaries express themselves through art, music, and
          dance. It is an electrifying world where innovation meets culture,
          illuminating the future of Gen Z and millennials in the most dynamic
          and immersive ways.
        </p>
        <button className="mt-5 sm:mt-6 bg-red-600 px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base font-semibold uppercase  hover:bg-red-700 transition">
          About Us
        </button>
      </div>
    </section>
  );
};

export default SecondHero;
