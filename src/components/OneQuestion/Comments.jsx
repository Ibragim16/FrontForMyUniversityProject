import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./question.module.css"

const Comments = () => {
    const state = useSelector((state)=> state.comments.comments)
    return (
        <div>
            <div className={styles.commentsTitle}>
                <span>Комментарии ({state.length})</span>
            </div>
        </div>
    );
};

export default Comments;