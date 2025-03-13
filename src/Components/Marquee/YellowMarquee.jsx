import React from 'react'
import nigeriaIcon from "../../assets/images/flag.png"; // Replace with actual path
import globeIcon from "../../assets/images/globe.png"; // Replace with actual path
import arrowIcon from "../../assets/images/arrow.png"; // Replace with actual path
const YellowMarquee = () => {
  return (
    <>
       <div className="scrolling-banner-container">
      <div className="scrolling-banner">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="scrolling-banner-item">
            <img src={nigeriaIcon} alt="Nigeria" className="scrolling-icon" />
            <img src={globeIcon} alt="Globe" className="scrolling-icon" />
            <span className="scrolling-text">XREPUBLIK 2025</span>
            <img src={arrowIcon} alt="Arrow" className="scrolling-icon" />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default YellowMarquee