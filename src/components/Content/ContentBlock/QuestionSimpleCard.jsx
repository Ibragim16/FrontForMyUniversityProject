import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { downRaiting, uppRaiting } from '../../../redux/features/question';
import styles from "./Content.module.css"

const QuestionSimpleCard = ({question}) => {
    const dispatch = useDispatch()

    const handleUppRaiting = ()=>{
        dispatch(uppRaiting(question._id))
    }

    const handleDownRaiting = ()=>{
        dispatch(downRaiting(question._id))
    }
    return (
        <div className={styles.QuestionCard}>
            <div className={styles.cardTittle}>
            </div>
            <div className={styles.questionText}>
                <span>
                    {question.title}
                </span>
            </div>
            <div className={styles.questionFooter}>
                <div className={styles.raiting}>
                    <button onClick={()=> handleUppRaiting()} >upp</button>
                    <span>{question.raiting.length}</span>
                    <button onClick={()=> handleDownRaiting()}>down</button>
                </div>
                <div className={styles.discussion}>
                    <span>🗨</span>
                    <Link to={`/question/${question._id}`}><button>обсуждение</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default QuestionSimpleCard;