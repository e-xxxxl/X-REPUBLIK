import React, { useState } from "react";
import secondlineupheroimg from "../../assets/images/secondlineupheroimg2.jpg";
import bujuimg from "../../assets/images/buju.jpg";
import ayraimg from "../../assets/images/ayraa.jpg";
import santiimg from "../../assets/images/santi.jpg";
import rugerimg from "../../assets/images/ruger.jpg";
import maffimg from "../../assets/images/maff.jpg";
//DJ
import deejamesimg from "../../assets/images/djamess.jpg"
import dopeimg from "../../assets/images/dopee.jpg"
//Dancers
import pocoimg from "../../assets/images/poco.jpeg"
//Hypemen

import gadimg from "../../assets/images/gad.jpg"

const allArtists = [
  { name: "BNXN", category: "Artists", fullName: "Daniel Etiese Benson", dob: "born 14 May 1997", image: bujuimg, desc: " A Nigerian singer and songwriter known for his smooth Afrobeats and dancehall-inspired sound. He gained recognition with hits like Feeling (with Ladipoe) and Finesse (with Pheelz)." },
  { name: "Ayra Starr", category: "Artists", fullName: "Oyinkansola Sarah Aderibigbe", dob: "born 14 June 2002", image: ayraimg, desc: "A fast-rising Nigerian singer and songwriter signed to Mavin Records. She blends Afropop and R&B, with hits like Rush and Bloody Samaritan." },
  { name: "Ruger", category: "Artists", fullName: "Michael Adebayo Olayinka", dob: "born 23 September 1999", image: rugerimg, desc: "A Nigerian Afrobeats and dancehall artist signed to Jonzing World. Recognized for his distinctive eye patch and hit songs like Bounce and Asiwaju." },
  // { name:"Cruel Santino", category: "Artists", fullName:"Osayaba Andrew Ize-Iyamu", dob:"3 June 1992", image: santiimg, desc:" A Nigerian artist and creative known for pioneering the alté movement. His music is a fusion of Afrobeats, dancehall, and alternative sounds, with projects like Subaru Boys and Mandy & The Jungle." },
  { name: "Ayo Maff", category: "Artists", fullName: "Ayorinde Mafoluku Ayodele", dob: "18 July 2005", image: maffimg, desc: "An emerging Nigerian artist with a unique sound blending Afrobeats and alternative music. Still growing in the industry." },
  //DJ
  { name: "DJames", category: "DJ", fullName: "Dee-James", image: deejamesimg, desc: "A UK-based DJ and producer, known as the 'King of Blends'. He is an African & Caribbean curator at DJcity & Beatsource." },
  { name: "DJ Neptune", category: "DJ", fullName: "Imohiosen Patrick", dob: "born 25 September 1990", image: secondlineupheroimg, desc: "A well-known DJ in Africa famous for collaborations with Afrobeats stars." },
  { name: "Dope Caesar", category: "DJ", fullName: " Sarah Oboh", image: dopeimg, desc: "A renowned Nigerian DJ known for blending Afrobeats, Hip-Hop, and Amapiano. She has worked with top artists and performed at major events across Africa." },
  //DANCERS
  { name: "Poco Lee", category: "Dancers", fullName: "Iweh Pascal Odinaka", dob: "born 21 October 1996", image: pocoimg, desc: "A Nigerian dancer and hype man credited with popularizing dance trends." },
  //HYPEMEN
  { name: "D02DTUN", category: "Hypemen", fullName: "Oladotun Ojuolape Kayode", dob: "born 8 April 1984", image: gadimg, desc: "A renowned Nigerian hype man, on-air personality, and entertainer known for his high-energy performances and electrifying stage presence. He has hosted major concerts and events across Africa." }
];

const categories = ["Artists", "DJ", "Dancers", "Hypemen"];

const SecondLineupHero = () => {
  const [selectedCategory, setSelectedCategory] = useState("Artists");
  const filteredArtists = allArtists.filter((artist) => artist.category === selectedCategory);
  const [selectedArtist, setSelectedArtist] = useState(filteredArtists[0] || {});

  return (
    <div className="w-full bg-cover bg-center p-6" style={{ backgroundImage: `url(${secondlineupheroimg})` }}>
      {/* 🔹 Filter Bar */}
      <div className="w-full border px-2 py-1 sm:px-3 sm:py-2 flex flex-col items-center gap-2 sm:gap-3">
        <div className="flex font-mono overflow-x-auto p-3 space-x-2 sm:space-x-3 w-full sm:w-auto justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold uppercase transition-all duration-300 whitespace-nowrap
             ${selectedCategory === category
                  ? category === "Artists"
                    ? "bg-red-600 text-white"
                    : category === "DJ"
                      ? "bg-yellow-400 text-black"
                      : category === "Dancers"
                        ? "bg-green-500 text-white"
                        : "bg-white text-black"
                  : "text-white hover:bg-gray-800"
                }`}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedArtist(filteredArtists[0] || {});
              }}
            >
              {category}
            </button>

          ))}
        </div>

        {/* 🔹 Clear Button */}
        <button className="text-white uppercase text-xs sm:text-sm hover:underline px-2 py-1 border-none"
          onClick={() => setSelectedCategory("")}>
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
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist, index) => (
            <div
              key={index}
              className={`relative w-full h-64 md:h-96 bg-gray-300 overflow-hidden group cursor-pointer border-b-4 ${artist.category === "Artists"
                ? "border-red-600"
                : artist.category === "DJ"
                  ? "border-yellow-400"
                  : artist.category === "Dancers"
                    ? "border-green-500"
                    : "border-white"
                }`}
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
          ))
        ) : (
          <p className="text-white text-center col-span-full">Please select a category.</p>
        )}
      </div>

      {/* 🔹 Preview Section */}
      {selectedArtist && selectedArtist.name && (
        <div className="mt-6 w-full bg-black flex">
          {/* 🔸 Red Sidebar */}
          <div className="bg-red-600 text-white text-sm font-bold uppercase px-4 flex items-center">
            Preview
          </div>

          {/* 🔸 Artist Details */}
          <div className="p-4 text-white flex-1">
            <h2 className="text-lg font-bold text-yellow-500 uppercase">{selectedArtist.name}</h2>
            <p className="text-sm md:text-xl font-mono font-medium mt-1">
              {selectedArtist.fullName} - {selectedArtist.dob} - popularly known as{" "}
              {selectedArtist.name} is {selectedArtist.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondLineupHero;
