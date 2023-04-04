import React from "react";
import dragon from "../../images/Alex_St_walpaper_dragon__dungeon_and_dragons__looking_left_cine_1f2d40f6-58e9-4d1a-b110-f62fc00a653b.png";
import icon from "../../images/L5R mons.gif";
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
      <div className="bot-appearance">11</div>
    </div>
  );
};

export default PictureSlider;
