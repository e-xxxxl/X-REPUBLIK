import React, { useState } from "react";
import secondlineupheroimg from "../../assets/images/secondlineupheroimg2.jpg";
import bujuimg from "../../assets/images/buju.jpg";
import ayraimg from "../../assets/images/ayraa.jpg";
import vibezimg from "../../assets/images/vibez.jpg";
import santiimg from "../../assets/images/santi.jpg";
import rugerimg from "../../assets/images/ruger.jpg";
import maffimg from "../../assets/images/maff.jpg";
const artists = [
  { name: "BNXN", image: bujuimg },
  { name: "Ayra Starr", image: ayraimg },
  { name: "Seyi Vibez",    image: vibezimg },
  { name: "Ruger",    image: rugerimg },
  { name:"Cruel Santino",image: santiimg },
  { name: "Olamide",   image: secondlineupheroimg },
  { name: "Tems",      image: secondlineupheroimg },
  { name: "Ayo Maff",   image: maffimg },
];

const SecondLineupHero = () => {
  const [selectedCategory, setSelectedCategory] = useState("Artists");
  const [selectedArtist, setSelectedArtist] = useState(artists[0]);

  const categories = ["Artists", "DJ", "Dancers", "Hypemen"];

  return (
    <div
      className="w-full bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${secondlineupheroimg})` }}
    >
{/* 🔹 Filter Bar */}
<div className="w-full bg-black px-2 py-1 sm:px-3 sm:py-2 flex flex-col items-center gap-2 sm:gap-3">
  {/* 🔹 Categories */}
  <div className="flex overflow-x-auto space-x-2 sm:space-x-3 w-full sm:w-auto justify-center">
    {categories.map((category) => (
      <button
        key={category}
        className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold uppercase transition-all duration-300 whitespace-nowrap
          ${
            selectedCategory === category
              ? "bg-red-600 text-white"
              : "text-white hover:bg-gray-800"
          }`}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>

  {/* 🔹 Centered & Smaller Clear Button */}
  <button
    className="text-white uppercase text-xs sm:text-sm hover:underline px-2 py-1 border-none"
    onClick={() => setSelectedCategory("")}
  >
    Clear
  </button>
</div>


      {/* 🔹 Legend (Key) */}
      <div className="mt-6 space-y-3 text-white">
        <div className="flex items-center space-x-3">
          <span className="w-5 h-5 bg-yellow-400"></span>
          <span className="font-bold text-lg">PERFORMING DISCO JOCKEYS</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="w-5 h-5 bg-red-600"></span>
          <span className="font-bold text-lg">PERFORMING ARTISTS</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="w-5 h-5 bg-green-500"></span>
          <span className="font-bold text-lg">PERFORMING DANCERS</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="w-5 h-5 bg-white border border-gray-400"></span>
          <span className="font-bold text-lg">PERFORMING HYPEMEN</span>
        </div>
      </div>

      {/* 🔹 Performers Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-4">
  {artists.map((artist, index) => (
    <div
      key={index}
      className={`relative w-full  h-40 md:h-96 bg-gray-300 overflow-hidden group cursor-pointer border-b-4 border-red-600 
        ${index >= 6 ? "col-span-1 sm:col-span-1 md:col-span-1" : ""}
        ${index >= 6 ? "grid-cols-2" : ""}
      `}
      onClick={() => setSelectedArtist(artist)}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full text-xs md:text-2xl bg-black bg-opacity-50 text-white p-2 text-center">
        {artist.name}
      </div>
    </div>
  ))}
</div>


      {/* 🔹 Preview Section */}
      <div className="mt-6 w-full bg-black flex">
        {/* 🔸 Red Sidebar */}
        <div className="bg-red-600 text-white text-sm font-bold uppercase px-4 flex items-center">
          Preview
        </div>

        {/* 🔸 Artist Details */}
        <div className="p-4 text-white flex-1">
          <h2 className="text-lg font-bold text-yellow-500 uppercase">
            {selectedArtist.name}
          </h2>
          <p className="text-sm font-medium mt-1">
            Divine Ikubor - born 1 May 2000 -, popularly known as{" "}
            {selectedArtist.name}, is a Nigerian singer, songwriter, and rapper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondLineupHero;
