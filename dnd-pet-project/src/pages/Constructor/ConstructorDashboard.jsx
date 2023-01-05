import React from "react";
import style from "../../styles/ConstructorDashboard.module.scss";
const ConstructorDashboard = () => {
  return (
    <div className={style.dashboard_body}>
      <div className={style.dashboard_primary}>
        <div className={style.dashboard_avatar}></div>
        <div className={style.dashboard_fields}>
          <span>Character name</span>
          <span>
            <input type="text" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConstructorDashboard;
