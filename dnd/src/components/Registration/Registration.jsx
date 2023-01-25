import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./Registration.module.scss";
const Registration = ({ login, setLogin }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "120%", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={style.registration_component}
      >
        <span className={style.header}>Registration form</span>
        <div className={style.email_form}>
          <span className={style.text}>email</span>
          <input
            type="text"
            placeholder="here put your email"
            className={style.input}
          />
        </div>
        <div className={style.username_form}>
          <span className={style.text}>username</span>
          <input
            type="text"
            placeholder="here put your username"
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
        <span onClick={() => setLogin(!login)} className={style.login_account}>
          login into your account
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Registration;
