import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../redux/features/user";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { img, firstname } = useSelector((state) => state.user);
  const [isAuth, setIsAuth] = useState(token);

  const [openRoom, setOpenRoom] = useState(false);

  const handleExit = () => {
    localStorage.clear();
  };
  const handleNavigate = () => {
    navigate("/signin");
  };
  const handleOpenRoom = (e) => {
    if (openRoom) {
      setOpenRoom(!openRoom);
    }
    if (e.target.onClick) {
      setOpenRoom(!openRoom);
    } else {
      setOpenRoom(!openRoom);
    }
  };

  return (
    <div className={styles.headerMain}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <div style={{paddingTop: "5px"}}>
            <img
              style={{ width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/7420/7420859.png"
              alt=""
            />
          </div>
          <Link to="/" className={styles.link}>
            <div style={{fontWeight: "900", fontSize: "25px", textAlign: "center", paddingBottom: "15px", color: "rgb(0,203,191)"}}><span>IQA</span></div>
          </Link>
          {/* {isAuth && (
            <Link
              to="/favorite"
              style={{ marginLeft: "10px" }}
              className={styles.link}
            >
              Избранные
            </Link>
          )} */}
        </div>
        <div></div>
        <div>
          {!token ? (
            <div onClick={() => handleNavigate()}>авторизация</div>
          ) : (
            <>
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* <div className={styles.headerButton}>
                  <Link to="/addQuestion" className={styles.link}>
                    Добавить вопрос
                  </Link>
                </div> */}
                {/* <div className={styles.headerButton}>
                  <Link
                    to="/signin"
                    onClick={() => handleExit()}
                    className={styles.link}
                  >
                    <div>выход</div>
                  </Link>
                </div> */}
                <div style={{textAlign: "right"}}>
                  <img
                    style={{ width: "35px", marginLeft: "203px" }}
                    src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                    alt=""
                    onClick={(e) => handleOpenRoom(e)}
                  />
                </div>
              </div>
              {openRoom && (
                <div className={styles.PersonalArea}>
                  <div style={{paddingBottom: "15px",
                      boxShadow: "0px 10px 10px -15px"}}>

                  <h4 style={{color:"rgb(0,203,191)", fontWeight: "500",}}>Личный кабинет</h4>
                  <div>
                    <div className={styles.imgContainer}>
                      <img src={img} alt="" />
                    </div>
                  </div>
                  <div
                   style={{marginTop: "10px"}}
                  >
                    <span style={{color: "gray"}}>{firstname}</span>
                  </div>
                  </div>

                  <div
                    className={styles.Spisok}
                    style={{
                      marginTop: "20px",
                      paddingRight: "10px",
                    }}
                  >
                    <div className={styles.spisokItem}>
                      <span>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/favorite"
                          onClick={() => setOpenRoom(!openRoom)}
                        >
                          избранные
                        </Link>
                      </span>
                      <div>
                        <img
                          src="https://cdn-icons.flaticon.com/png/128/3983/premium/3983864.png?token=exp=1654098576~hmac=7339547e9e19a6c72bb1888dd70eebce"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={styles.spisokItem}>
                      <span>
                        <Link to="/addQuestion" className={styles.link}
                        onClick={() => setOpenRoom(!openRoom)}>
                          добавить
                        </Link>
                      </span>
                      <div>
                        <img
                          src="https://cdn-icons.flaticon.com/png/128/3114/premium/3114824.png?token=exp=1654247613~hmac=8f11845e1f62f9e2462825241d504f6f"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={styles.spisokItem}>
                    <Link to="/messanger" className={styles.link}
                        onClick={() => setOpenRoom(!openRoom)}>
                          сообщения
                        </Link>
                      <div>
                        <img
                          src="https://cdn-icons.flaticon.com/png/128/3832/premium/3832823.png?token=exp=1654099077~hmac=1e31c675d696fae157feb1abf34f15ce"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={styles.spisokItem}>
                      <span>
                        <Link
                          to="/signin"
                          onClick={() => handleExit()}
                          className={styles.link}
                        >
                          <div>выход</div>
                        </Link>
                      </span>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2261/2261434.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
