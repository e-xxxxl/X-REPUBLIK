import React from "react";
import flagIcon from "../../assets/images/sflag.png"; // Replace with actual path
import globeIcon from "../../assets/images/sglobe.png"; // Replace with actual path
import arrowIcon from "../../assets/images/sarrow.png"; // Replace with actual path

const SideScroll = () => {
  return (
    <div className="vertical-marquee-container">
      <div className="vertical-marquee">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="vertical-marquee-item">
            <img src={flagIcon} alt="Flag" className="marquee-icon" />
            <img src={arrowIcon} alt="Arrow" className="marquee-icon" />
            <span className="marquee-text">XPRESSIVE REPUBLIK</span>
            <img src={globeIcon} alt="Globe" className="marquee-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideScroll;
