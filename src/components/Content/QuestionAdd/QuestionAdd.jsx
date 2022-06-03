import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../../redux/features/question";
import { getUser } from "../../../redux/features/user";
import styles from "./QuestionAdd.module.css";

const QuestionAdd = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const [tagText, setTagText] = useState();
  const [tag, setTag] = useState([]);
  const handleAddTag = () => {
    setTag((prev) => [...prev, tagText]);
    setTagText("");
  };
  const handleDeleteTag = (ind)=>{
      setTag(tag.filter((item)=>item !==ind))
  }
  const handleAddQuestion = (title, text, tag)=>{
      dispatch(addQuestion(title, text, tag))
  }
  const { firstname, img } = useSelector((state) => state.user);
  return (
    <>
      <div className={styles.tittle}>
        <div>
          <h3>Добавить вопрос</h3>
        </div>
      </div>
      <div className={styles.questionMainBlock}>
        <div className={styles.authorINF}>
          <div style={{width: "50px", height: "50px",  borderRadius: "50%",overflow: "hidden",}}>
            <img
              style={{
                width: "auto",
               height: "100%",
                marginRight: "10px",
              }}
              src={img}
              alt="ddd"
            />
          </div>
          <span style={{marginTop: "15px", marginLeft: "10px"}}>{firstname}</span>
        </div>
        <div
          style={{
            width: "1160px",
            margin: "25px auto 20px",
            textAlign: "left",
          }}
        >
          <div style={{ marginBottom: "20px", color: "rgba(0, 0, 0, 0.952)" }}>
            Сформулируйте вопрос*
          </div>
          <div className={styles.inputQuestion}>
            <input type="text" placeholder="Введите текст"
            value={title}
            onChange={(e)=> setTitle(e.target.value)} />
          </div>
          <div
            style={{ margin: "30px 0 10px 0", color: "rgba(0, 0, 0, 0.952)" }}
          >
            Дополнительная информация по вопросу*
          </div>
          <div className={styles.inputQuestion}></div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px" }}
              value={text}
              onChange={(e)=> setText(e.target.value)}
            ></textarea>
            <label for="floatingTextarea2"></label>
          </div>
          <div
            style={{ margin: "30px 0 10px 0", color: "rgba(0, 0, 0, 0.952)" }}
          >
            Теги*
          </div>
          <div className={styles.Tags}>
            {tag.map((item, index) => {
              return (
                <div className={styles.tagBlock}>
                  <button onClick={()=> handleDeleteTag(item)}>x</button>
                  <div>{item}</div>
                </div>
              );
            })}
            <div className={styles.tagBlock}>
              <button onClick={() => handleAddTag()}>+</button>
              <input
                style={{ width: "100px" }}
                type="text"
                value={tagText}
                onChange={(e) => setTagText(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button className={styles.QuestionAddButton} onClick={()=> handleAddQuestion(title,text,tag)}>опубликовать</button>
            <button className={styles.QuestionCancelButton}>отмена</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAdd;
