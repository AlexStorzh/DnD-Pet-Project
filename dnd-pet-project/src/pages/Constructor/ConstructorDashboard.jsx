import React from "react";
import style from "../../styles/ConstructorDashboard.module.scss";
import { useState, useEffect } from "react";
import { getApiResource } from "../../api/getApi";
import { DND_API, DND_BACKGROUNDS } from "../../utils/apiConstants";

const ConstructorDashboard = () => {
  const [backgrounds, setBackgrounds] = useState(""); //array of backgrounds for options
  const [selectedBackground, setSelectedBackground] = useState("");

  const getResource = async (url) => {
    const res = await getApiResource(url);
    setBackgrounds(res);
  };

  useEffect(() => {
    getResource(DND_API + DND_BACKGROUNDS);
  }, []);

  const handleChange = (e, element) => {
    // remake on react-select component
    setSelectedBackground(e.target.value);
  };

  return (
    <div className={style.dashboard_body}>
      <div className={style.dashboard_primary}>
        <div className={style.dashboard_avatar}></div>
        <div className={style.dashboard_fields}>
          <div className={style.character_name}>
            <span>Character name</span>

            <span>
              <input type="text" />
            </span>
          </div>
          <div className={style.character_history}>
            <span>Background</span>
            <select
              value={selectedBackground}
              onChange={(e) => handleChange(e, e.target)}
            >
              <option disabled={true} value="">
                -Choose Background-
              </option>
              {backgrounds &&
                backgrounds.results.map((element) => (
                  <option key={element.name}>{element.name}</option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructorDashboard;
