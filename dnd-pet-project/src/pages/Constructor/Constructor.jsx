import React from "react";
import { Outlet } from "react-router-dom";
import ConstructorProgress from "../../components/ConstructorProgress";
import { constructorPagesData } from "../../utils/pagesData";
import style from "../../styles/Constructor.module.scss";

const Constructor = () => {
  return (
    <div className={style.constructor}>
      <ConstructorProgress arr={constructorPagesData} className={style.nav} />
      <Outlet />
    </div>
  );
};

export default Constructor;
