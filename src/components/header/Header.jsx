import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)

  const [isAuth , setIsAuth] = useState(token)

  const handleExit = ()=>{
    localStorage.clear()
  }
  const handleNavigate=()=>{
    navigate("/signin")
  }
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <div><img style={{width: "50px"}} src="https://img2.freepng.ru/20180509/oqq/kisspng-computer-icons-online-chat-chatbot-messaging-apps-5af3346f56f113.7488152515258881113561.jpg" alt="" /></div>
          <Link to="/" className={styles.link}><div >Название сайта</div></Link> 
        </div>
        <div >
          {isAuth&&
          <Link to="/favorite" className={styles.link}>Избранные</Link>
          }
        </div>
        <div>
          {!token?
          <div onClick={()=>handleNavigate()}>авторизация</div>
          :
          <Link to="/signin" onClick={() => handleExit()} className={styles.link}><div>выход</div></Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
