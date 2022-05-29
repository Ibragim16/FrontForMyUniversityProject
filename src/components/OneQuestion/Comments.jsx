import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./question.module.css"
import {format} from "timeago.js"

const Comments = ({comment}) => {

    return (
        <div className={styles.commentBlocks}>
            <div className={styles.commentsTitle}>
                <img src={comment.author.img} alt="" />
                <div className={styles.commentsUserInf}>
                    <div>{comment.author.firstName}</div>
                    <span className={styles.addedTime}>{format(comment.createdAt)}</span>
                </div>
            </div>
            <div className={styles.commentText}>{comment.text}</div>
        </div>
    );
};

export default Comments;