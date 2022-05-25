import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./question.module.css";
import { format } from "timeago.js";
import Comments from "./Comments";
import { addComment, getCommentsByQuestionId } from "../../redux/features/comments";
import { getOneQuestion, getQuestion } from "../../redux/features/question";

const Question = ({state}) => {
  const params = useParams();
  const [comment, setComment] = useState()
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(getCommentsByQuestionId(params.id))
      
    },[dispatch, params.id]);
    const comments = useSelector((state) => state.comments.commentsByQuestion);

    const question = state?.find((item) => {
    return item._id.toString() === params.id;
  });
console.log(comments)

  const handleAddComment = ()=>{
      console.log(111)
      dispatch(addComment(params.id, comment))
  }

  return (
    <div className={styles.questionMainBlock}>
      <div className={styles.QuestionCard}>
        <div className={styles.cardTittle}>
          <div className={styles.cardAuthor}>
            <img src={question?.author?.img} alt="Icon" />
            <span>{question?.author?.firstName}</span>
            <span className={styles.addedTime}>Добавлен {format(question?.createdAt)}</span>
          </div>
          <div className={styles.cardTag}>
            {question?.tags?.map((item) => {
              return <button className={styles.tagButton}>{item}</button>;
            })}
          </div>
        </div>
        <div className={styles.questionTitle}>
          <h4>{question?.title}</h4>
        </div>
        <div className={styles.questionText}>
          <span>{question?.text}</span>
        </div>
        <div className={styles.questionFooter}>
          <div className={styles.raiting}>
            <button>^</button>
            <span>0</span>
            <button>🔽</button>
          </div>
        </div>
      </div>
      <div className={styles.commentsMainBlock}>
        <h2>Комментарии ({comments?.data?.length})</h2>
      </div>
      <div className={styles.commentsInputBlock}>
        <div >
          <input type="text-area" value={comment} onChange={(e)=> setComment(e.target.value)}/>
        </div>
        <button onClick={()=> handleAddComment()}>опубликовать</button>
      </div>
      <div className={styles.commentsMap}>
          {comments?.data?.map((comment)=>{
              return(
                <Comments comment = {comment} />
              )
          })}
          

      </div>
    </div>
  );
};

export default Question;
