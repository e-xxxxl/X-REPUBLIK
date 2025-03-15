import React, { useState } from "react";
import secondlineupheroimg from "../../assets/images/secondlineupheroimg2.jpg";
import bujuimg from "../../assets/images/buju.jpg";
import ayraimg from "../../assets/images/ayraa.jpg";
import vibezimg from "../../assets/images/vibez.jpg";
import santiimg from "../../assets/images/santi.jpg";
import rugerimg from "../../assets/images/ruger.jpg";
import maffimg from "../../assets/images/maff.jpg";
const artists = [
  { name: "BNXN", fullName:"Daniel Etiese Benson",dob:"born 14 May 1997", image: bujuimg, desc:" A Nigerian singer and songwriter known for his smooth Afrobeats and dancehall-inspired sound. He gained recognition with hits like Feeling (with Ladipoe) and Finesse (with Pheelz)" },
  { name: "Ayra Starr", fullName:"Oyinkansola Sarah Aderibigbe", dob:"born 14 June 2002", image: ayraimg, desc:"A fast-rising Nigerian singer and songwriter signed to Mavin Records. She blends Afropop and R&B, with hits like Rush and Bloody Samaritan." },
  { name: "Ruger", fullName:"Michael Adebayo Olayinka", dob:"born 23 September 1999", image: rugerimg, desc:"A Nigerian Afrobeats and dancehall artist signed to Jonzing World. Recognized for his distinctive eye patch and hit songs like Bounce and Asiwaju." },
  { name:"Cruel Santino", fullName:"Osayaba Andrew Ize-Iyamu", dob:"3 June 1992", image: santiimg, desc:" A Nigerian artist and creative known for pioneering the alté movement. His music is a fusion of Afrobeats, dancehall, and alternative sounds, with projects like Subaru Boys and Mandy & The Jungle." },
  { name: "Olamide", fullName:"", dob:"born 14 May 1997", image: secondlineupheroimg, desc:"" },
  { name: "Tems",  fullName:"Temilade Openiyi", dob:"born 11 June 1995", image: secondlineupheroimg,desc:"A Nigerian singer-songwriter and record producer known for her soulful voice and alternative R&B sound. She gained global fame with Essence (with Wizkid) and has worked with artists like Drake and Future." },
  { name: "Ayo Maff",  fullName:"Ayorinde Mafoluku Ayodele", dob:"18 July 2005", image: maffimg,desc:"An emerging Nigerian artist with a unique sound blending Afrobeats and alternative music. Still growing in the industry." },
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
<div className="w-[90%] sm:w-full bg-black px-2 py-1 sm:px-3 sm:py-2 flex flex-col items-center gap-2 sm:gap-3">
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
          <span className="font-bold text-sm md:text-lg font-mono">PERFORMING DISCO JOCKEYS</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="w-5 h-5 bg-red-600"></span>
          <span className="font-bold text-sm md:text-lg font-mono">PERFORMING ARTISTS</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="w-5 h-5 bg-green-500"></span>
          <span className="font-bold text-sm md:text-lg font-mono">PERFORMING DANCERS</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="w-5 h-5 bg-white border border-gray-400"></span>
          <span className="font-bold text-sm md:text-lg font-mono">PERFORMING HYPEMEN</span>
        </div>
      </div>

      {/* 🔹 Performers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
  {artists.map((artist, index) => (
    <div
      key={index}
      className={`relative w-full h-64 md:h-96 bg-gray-300 overflow-hidden group cursor-pointer border-b-4 border-red-600`}
      onClick={() => setSelectedArtist(artist)}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full h-10 text-xl md:text-2xl bg-black bg-opacity-50 text-white p-2 text-center">
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
          <p className=" text-sm md:text-xl font-mono font-medium mt-1">
          {selectedArtist.fullName} - {selectedArtist.dob} - popularly known as{" "}
            {selectedArtist.name} is {selectedArtist.desc} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondLineupHero;
