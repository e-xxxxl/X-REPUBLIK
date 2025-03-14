// import React from "react";
// import { ChevronDown } from "lucide-react";
// import Navbar from "../Navbar/Navbar";

// const Header = () => {
//   return (
//     <header className="bg-black text-white w-full fixed top-0 z-50 shadow-md">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
//         {/* Welcome Text with Arrow in Front */}
//         <h1 className="text-xl md:text-2xl font-extrabold uppercase mb-96 flex items-center gap-2">

 
//           <ChevronDown size={24} className="text-green-500 animate-bounce" />
//           Welcome to the <span className="text-[#FF0000]">Republik</span>
//         </h1>
        
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="bg-black text-white w-full min-h-[82vh] flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex  wel-text flex-col items-center justify-center flex-grow text-white text-center">
        {/* Welcome Text with Arrow in Front */}
        <h1 className="text-xl md:text-3xl mb-48 font-extrabold uppercase flex items-center gap-2">
          <ChevronDown size={24} className="text-green-500 animate-bounce" />
          Welcome to the <span className="text-[#FF0000]">Republik</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
  