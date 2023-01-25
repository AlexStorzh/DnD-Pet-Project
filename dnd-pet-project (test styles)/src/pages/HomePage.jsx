import React from "react";
import { Outlet } from "react-router-dom";
import { pagesData } from "../utils/pagesData";
import Navbar from "../components/Navbar";
import style from "../styles/HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={style.home_page_wrapper}>
      <div className={style.home_page}>
        <Navbar arr={pagesData} />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
