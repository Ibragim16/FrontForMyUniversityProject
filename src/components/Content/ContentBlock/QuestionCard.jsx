import React from 'react';
import styles from "./Content.module.css"
import {format} from "timeago.js"
import { Link } from 'react-router-dom';

const QuestionCard = ({question}) => {
    return (
        <div className={styles.QuestionCard}>
            <div className={styles.cardTittle}>
                <div className={styles.cardAuthor}>
                    <img src={question.author.img} alt="Icon" />
                    <span>{question.author.firstName}</span>
                    <span>Добавлен {format(question.createdAt)}</span>
                </div>
                <div className={styles.cardTag}>
                    {question.tags.map((item)=>{
                        return(

                    <button className={styles.tagButton}>
                        {item}
                    </button>
                        )
                    })}
                </div>
            </div>
            <div className={styles.questionText}>
                <span>
                    {question.text}
                </span>
            </div>
            <div className={styles.questionFooter}>
                <div className={styles.raiting}>
                    <button>upp</button>
                    <span>0</span>
                    <button>down</button>
                </div>
                <div className={styles.discussion}>
                    <span>🗨</span>
                    <Link to={`/question/${question._id}`}><button>обсуждение</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;