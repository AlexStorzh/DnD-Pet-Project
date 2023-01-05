import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Navbar.module.scss";
const Navbar = ({ arr }) => {
  return (
    <nav className={style.nav}>
      {arr.map(({ link, title }) => (
        <Link key={link} to={link}>
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
