import React, { useState } from "react";

const ArtistFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("Artists");

  const categories = ["Artists", "DJ", "Dancers", "Hypemen"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handleClear = () => {
    setSelectedCategory("");
    onFilterChange("");
  };

  return (
    <div className="flex items-center justify-between w-full bg-black p-3">
      {/* Category Tabs */}
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 text-lg font-bold uppercase ${
              selectedCategory === category ? "bg-red-600 text-white" : "text-white"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Clear Button */}
      <button className="text-white uppercase text-sm" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default ArtistFilter;
