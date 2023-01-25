import React from "react";
import style from "./RaceModalWindow.module.scss";
import { motion } from "framer-motion";
const RaceModalWindow = ({ setModalVisibility }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      duration={1}
      className={style.modalWindow}
    >
      <div onClick={() => setModalVisibility(false)}>Exit</div>
    </motion.div>
  );
};

export default RaceModalWindow;
