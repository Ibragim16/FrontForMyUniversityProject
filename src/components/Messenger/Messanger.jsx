import React from "react";
import styles from "./messanger.module.css";
const Messanger = () => {
  return (
    <div>
      <div className={styles.tittle}>
        <div>
          <h3>Сообщения</h3>
        </div>
      </div>
      <div className={styles.messangerMainBlock}>
          <div className={styles.conversationsMainBlock}>
            <h4 style={{color:"rgb(0,203,191)"}}>Чаты</h4>
            <div className={styles.conversationList} >
                <div className={styles.conversation}>
                    <div className={styles.userImg}>
                        <img src="https://img.fonwall.ru/o/74/more-volna-solntse-priroda.jpg?route=mid&amp;h=750" alt="" />
                    </div>
                    <div className={styles.userInf}>
                        <h6>Ибрагим</h6>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Messanger;
