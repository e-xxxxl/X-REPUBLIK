import React from "react";
import lineupheroimg from '../../assets/images/lineupheroimg.png'
const LineupHero = () => {
  return (
    <div
      className="relative w-full h-[150px] lineup-image md:h-[500px] flex items-center justify-center bg-cover bg-center  mt-[-388px]"
      style={{
     backgroundImage: `url(${lineupheroimg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text */}
      <h1 className="relative text-white text-3xl md:text-5xl font-bold">
        LINE UP 2025
      </h1>

    </div>
  );
};

export default LineupHero;
