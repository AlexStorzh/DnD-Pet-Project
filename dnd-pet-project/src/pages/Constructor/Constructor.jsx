import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ConstructorProgress from "../../components/ConstructorProgress";
import { constructorPagesData } from "../../utils/pagesData";
import style from "../../styles/Constructor.module.scss";
import arrow_right from "../../images/arrow-right-svgrepo-com.svg";
import arrow_left from "../../images/arrow-left-svgrepo-com.svg";

const Constructor = () => {
  const [data, setData] = useState(constructorPagesData);
  const [page, setPage] = useState(0);
  let goFurther = () => {
    setPage(page + 1);
  };
  let goBack = () => {
    setPage(page - 1);
  };
  return (
    <div className={style.constructor}>
      <ConstructorProgress arr={constructorPagesData} className={style.nav} />
      <div className={style.nav_buttons}>
        {page > 0 && (
          <Link to={data[page - 1].link}>
            <div onClick={goBack} className={style.button_previous}>
              <img src={arrow_left} alt="" />
              <span>Previous</span>
            </div>
          </Link>
        )}
        {page < 4 && (
          <Link to={data[page + 1].link}>
            <div onClick={goFurther} className={style.button_next}>
              <img src={arrow_right} alt="" />
              <span>Next</span>
            </div>
          </Link>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default Constructor;
