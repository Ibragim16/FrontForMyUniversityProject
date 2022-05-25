import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import styles from "./Content.module.css";
import { useDispatch, useSelector } from "react-redux";
import  { getQuestion } from "../../../redux/features/question";
import QuestionSimpleCard from "./QuestionSimpleCard";

const Content = () => {
    const [check , setCheck] = useState(false)
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestion());
  },[dispatch]);

const state = useSelector((state)=>state.question.question)
console.log(state)


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
            checked = {check}
            onClick={()=> setCheck(!check)}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
          Корректный вид
          </label>
        </div>
      </div>
    </div>
      <div>
        {state?.map((question) => {
            return(

                !check?<QuestionCard question={question} />
                :<QuestionSimpleCard question={question}/>
            )
        })}
      </div>
    </div>
  );
};

export default Content;
