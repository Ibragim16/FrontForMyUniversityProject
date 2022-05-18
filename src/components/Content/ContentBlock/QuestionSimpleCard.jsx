import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Content.module.css"

const QuestionSimpleCard = ({question}) => {
    return (
        <div className={styles.QuestionCard}>
            <div className={styles.cardTittle}>
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

export default QuestionSimpleCard;