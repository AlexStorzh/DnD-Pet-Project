import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/ConstructorProgress.module.scss";
const ConstructorProgress = ({ arr }) => {
  return (
    <nav className={style.nav}>
      {arr.map(({ number, link, title }) => (
        <NavLink key={link} to={link}>
          {number} {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default ConstructorProgress;
