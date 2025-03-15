import React from "react";

const Artistecontact = () => {
  return (
    <div className="bg-black text-white py-10 md:py-20 px-4 sm:px-10">
      <h2 className="text-[#FFFF00] text-2xl sm:text-3xl font-extrabold uppercase text-center">
        Are You an Artiste?
      </h2>
      <p className="mt-2 text-sm font-mono sm:text-lg text-left">
        Send a direct mail or text to any of the following contacts
      </p>

      <div className="mt-4 space-y-2 font-mono text-sm sm:text-lg text-left">
        <p>
          <span className="font-bold">Email:</span> thealtegang@gmail.com
        </p>
        <p>
          <span className="font-bold">Phone Number:</span>{" "}
          <span className="text-gray-300">09073249830</span>{" "}
          <span className="text-gray-400">(WhatsApp Only)</span>
        </p>
        <p>
          <span className="font-bold">Phone Number:</span>{" "}
          <span className="text-gray-300">09076618975</span>{" "}
          <span className="text-gray-400">(Admin)</span>
        </p>
      </div>
    </div>
  );
};

export default Artistecontact;
