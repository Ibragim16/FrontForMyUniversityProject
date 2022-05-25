import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const token = useSelector((state) => state.user.token)

  const handleExit = ()=>{
    localStorage.clear()
  }
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <div>💥</div>
          <Link to="/"><div>Название сайта</div></Link> 
        </div>
        <div>
          {!token?
          <div>Регистрация</div>
          :
          <Link to="/signin" onClick={() => handleExit()}><div>выход</div></Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
