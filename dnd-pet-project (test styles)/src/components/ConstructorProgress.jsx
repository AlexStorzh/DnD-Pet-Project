import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/ConstructorProgress.module.scss";
const ConstructorProgress = ({ arr, setPage }) => {
  let handleClick = (e, index) => {
    setPage(index);
  };

  return (
    <nav className={style.nav}>
      {arr.map(({ number, link, title, index }) => (
        <NavLink
          onClick={(e) => handleClick(e, index)}
          index={index}
          key={link}
          to={link}
        >
          {number} {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default ConstructorProgress;
