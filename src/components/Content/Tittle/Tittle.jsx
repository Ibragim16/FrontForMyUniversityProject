import React from "react";
import styles from "./tittle.module.css"

const Titile = () => {
  return (
    <div className={styles.tittle}>
      <div>
        <h3>Все вопросы</h3>
      </div>
      <div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
          Корректный вид
          </label>
        </div>
      </div>
    </div>
  );
};

export default Titile;
