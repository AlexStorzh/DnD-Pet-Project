import React, { useState } from "react";
import SignInUpPage from "./SignInUpPage";
import style from "../styles/homePage.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={style.page_wrapper}>
        <SignInUpPage />
      </div>
    </>
  );
};

export default HomePage;
