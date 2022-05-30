import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import styles from "./Content.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../../redux/features/question";
import QuestionSimpleCard from "./QuestionSimpleCard";
import { getFavorite } from "../../../redux/features/favorite";

const Content = () => {
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestion());
    dispatch(getFavorite());
  }, [dispatch]);

  const stateFav = useSelector((state) => state.favorite.favorites);
  const state = useSelector((state) => state.question.question);
  const questionLoading = useSelector(
    (state) => state.question.questionLoading
  );

  if (questionLoading) {
    return (
      <div className={styles.preloader}>
        <div className={styles.preloader__row}>
          <div className={styles.preloader__item}></div>
          <div className={styles.preloader__item}></div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.MainContentBlock}>
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
              checked={check}
              onClick={() => setCheck(!check)}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Корректный вид
            </label>
          </div>
        </div>
      </div>
      <div>
        {state?.map((question) => {
          return (
            <React.Fragment key={question._id}>
              {!check ? (
                <QuestionCard question={question} state={stateFav} />
              ) : (
                <QuestionSimpleCard question={question} state={stateFav} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
