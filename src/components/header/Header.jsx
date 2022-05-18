import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <div>💥</div>
          <div>Название сайта</div>
        </div>
        <div>
          <div>Регистрация</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
