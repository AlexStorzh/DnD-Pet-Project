import React from "react";
import dragon from "../../../images/dragon.png";
import icon from "../../../images/L5R mons.gif";
import "./PictureSlider.scss";
const PictureSlider = () => {
  return (
    //Receive images for slider
    <div className="slider" style={{ backgroundImage: `url(${dragon})` }}>
      <div className="top-appearance">
        <img src={icon} alt="dragon-icon" />
        {/* Receive names from DB !!! CHANGE ALUKARD FOR {characterName} */}
        <p className="race-name">Dragonborn</p>
      </div>
      <div className="bot-appearance"></div>
    </div>
  );
};

export default PictureSlider;
