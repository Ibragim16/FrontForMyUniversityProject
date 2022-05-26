import React from 'react';
import styles from "./Content.module.css"
import { useDispatch } from 'react-redux';

import {format} from "timeago.js"
import { Link } from 'react-router-dom';

const QuestionCard = ({question}) => {
    const dispatch = useDispatch()

    const handleAddToFavorite = ()=>{
        dispatch()
    }
    return (
        <div className={styles.QuestionCard}>
            <div className={styles.cardTittle}>
                <div className={styles.cardAuthor}>
                    <img src={question.author.img} alt="Icon" />
                    <span>{question.author.firstName}</span>
                    <span className={styles.addedTime}>Добавлен {format(question.createdAt)}</span>
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
                    {question.title}
                </span>
            </div>
            <div className={styles.questionFooter}>
                <div className={styles.raiting}>
                    <button >˄</button>
                    <span>{question.raiting.length}</span>
                    <button>˅</button>
                </div>
                <div className={styles.discussion}>
                    <span>🗨</span>
                    <Link to={`/question/${question._id}`}><button>обсуждение</button></Link>
                    
                </div>
                <div>
                    <span onClick={()=> handleAddToFavorite()}>Добавить в Избранные</span>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;