import React from "react";
import style from "./RaceChosePage.module.scss";
import { getApiResource } from "../../../api/getApi";
import { useState, useEffect } from "react";
import { DND_5EAPI_API, DND_5EAPI_RACES } from "../../../utils/apiConstants";
import arrow from "../../../images/chevron-right.svg";
import { imageData } from "../../../utils/imagesData";
import RaceModalWindow from "./RaceModalWindow";
const RaceChosePage = () => {
  const [racesData, setRacesData] = useState();
  const [modalVisibility, setModalVisibility] = useState(false);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    setRacesData(res.results);
  };
  useEffect(() => {
    getResource(DND_5EAPI_API + DND_5EAPI_RACES);
  }, []);

  const getRace = () => {
    setModalVisibility(true);
  };
  return (
    <div className={style.race_chose_body}>
      {modalVisibility && (
        <RaceModalWindow setModalVisibility={setModalVisibility} />
      )}
      <div className={style.race_chose_primary}>
        <span>Choose a race</span>
      </div>
      <div className={style.race_chose_column}>
        {racesData &&
          racesData.map((e) => (
            <div onClick={() => getRace()} key={e.index}>
              {imageData.map(({ index, src }) => {
                if (index === e.index) {
                  return <img key={index} src={src} alt="" />;
                }
              })}
              {e.name}
              <img className={style.chevron} src={arrow} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RaceChosePage;
