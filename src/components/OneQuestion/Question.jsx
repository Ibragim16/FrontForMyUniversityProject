import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./question.module.css"
import {format} from "timeago.js"

const Question = () => {
    const params = useParams()

    useEffect(()=>{
        
    })
    const state = useSelector((state)=> state.question.question)
    
    const question = state.find((item)=>{
        return(
            item._id.toString() === params.id
        )
    })
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
                    
                </div>
            </div>
        </div>
    );
};

export default Question;