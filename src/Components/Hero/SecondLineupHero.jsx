import React, { useState } from "react";
import secondlineupheroimg from "../../assets/images/secondlineupheroimg.png";

const artists = [
  { name: "Rema", image: secondlineupheroimg },
  { name: "Burna Boy", image: secondlineupheroimg },
  { name: "Wizkid",    image: secondlineupheroimg },
  { name: "Davido",    image: secondlineupheroimg },
  { name:"Tiwa Savage",image: secondlineupheroimg },
  { name: "Olamide",   image: secondlineupheroimg },
  { name: "Tems",      image: secondlineupheroimg },
  { name: "Fireboy",   image: secondlineupheroimg },
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
      <div className="w-full bg-black p-3 flex flex-col md:flex-row justify-between items-center">
        {/* 🔹 Categories */}
        <div className="flex overflow-x-auto space-x-2 md:space-x-4 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-lg font-bold uppercase transition-all duration-300 whitespace-nowrap
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

        {/* 🔹 Clear Button */}
        <button
          className="text-white uppercase text-sm mt-2 md:mt-0 hover:underline"
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
      className={`relative w-full h-40 bg-gray-300 overflow-hidden group cursor-pointer border-b-4 border-red-600 
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
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
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
