import React from "react";
import style from "./Login.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const Login = ({ login, setLogin }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "-120%", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={style.login_component}
      >
        <span className={style.header}>
          Dungeon & Dragons: Character Creator
        </span>
        <div className={style.email_form}>
          <span className={style.text}>email</span>
          <input
            type="text"
            placeholder="here put your email"
            className={style.input}
          />
        </div>
        <div className={style.password_form}>
          <span className={style.text}>password</span>
          <input
            placeholder="here put your password"
            type="password"
            className={style.input}
          />
        </div>
        <div className={style.login_button}>login</div>
        <span onClick={() => setLogin(!login)} className={style.create_account}>
          not registered ? create an account
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
