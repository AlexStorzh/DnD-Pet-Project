import React from "react";
import Login from "../components/Login/Login";
import { useState } from "react";
import Registration from "../components/Registration/Registration";
import style from "../styles/signInIpPage.module.scss";
const LoginPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className={style.content}>
      {" "}
      {login ? (
        <Login login={login} setLogin={setLogin} />
      ) : (
        <Registration login={login} setLogin={setLogin} />
      )}{" "}
    </div>
  );
};

export default LoginPage;
