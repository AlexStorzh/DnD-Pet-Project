import React from "react";
import style from "../../styles/ConstructorDashboard.module.scss";
import { useState, useEffect } from "react";
import { getApiResource } from "../../api/getApi";
import { DND_API, DND_BACKGROUNDS } from "../../utils/apiConstants";
import { motion } from "framer-motion";

const ConstructorDashboard = ({ isVisible }) => {
  const [backgroundsData, setBackgroundsData] = useState("");
  const [selected, setSelected] = useState("");
  const [characterBackground, setCharacterBackground] = useState();

  const getResource = async (url) => {
    const res = await getApiResource(url);
    setBackgroundsData(res);
  };

  useEffect(() => {
    getResource(DND_API + DND_BACKGROUNDS);
  }, []);

  const handleChange = async (e) => {
    setSelected(e.target.value);
    const res = await getApiResource(
      DND_API + DND_BACKGROUNDS + e.target.value
    );
    setCharacterBackground(res);
    console.log(characterBackground);
  };

  return (
    <div className={style.dashboard_body}>
      <div className={style.dashboard_primary}>
        <div className={style.dashboard_avatar}></div>
        <div className={style.dashboard_fields}>
          <div className={style.character_name}>
            <span>Character name</span>
            <input type="text" />
          </div>
          <div className={style.character_history}>
            <span>Background</span>
            <select value={selected} onChange={handleChange}>
              <option disabled={true} value="">
                - Choose Background -
              </option>
              {backgroundsData &&
                backgroundsData.results.map((e) => (
                  <option value={e.slug} key={e.name}>
                    {e.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {characterBackground && (
        <div className={style.dashboard_info}>
          <p>Description:</p>
          <div>{characterBackground.desc}</div>
          <div>
            <p>Equipment:</p>
            {characterBackground.equipment}
          </div>
          <div>
            {characterBackground.skill_proficiencies && (
              <div>
                <p>Skill proficiencies:</p>
                {characterBackground.skill_proficiencies}
              </div>
            )}
            {characterBackground.tool_proficiencies && (
              <div>
                <p>Tool proficiencies:</p>
                {characterBackground.tool_proficiencies}
              </div>
            )}
            {characterBackground.languages && (
              <div>
                <p>Languages:</p>
                {characterBackground.languages}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstructorDashboard;
