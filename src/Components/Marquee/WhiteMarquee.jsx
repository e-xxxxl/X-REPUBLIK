import React from "react";
import nigeriaIcon from "../../assets/images/flag.png"; 
import globeIcon from "../../assets/images/globe.png"; 
import arrowIcon from "../../assets/images/arrow.png"; 

const WhiteMarquee = () => {
  return (
    <div className="white-marquee-container">
      <div className="white-marquee-content">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="white-marquee-item">
            <img src={nigeriaIcon} alt="Nigeria" className="white-marquee-icon" />
            <img src={globeIcon} alt="Globe" className="white-marquee-icon" />
            <span className="white-marquee-text">XREPUBLIK 2025</span>
            <img src={arrowIcon} alt="Arrow" className="white-marquee-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteMarquee;
