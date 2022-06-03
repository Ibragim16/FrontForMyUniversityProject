import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./question.module.css"
import {format} from "timeago.js"
import { deleteComment } from '../../redux/features/comments';

const Comments = ({comment}) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.userId)
    
    const handleDeleteComment = (id)=>{
        dispatch(deleteComment(id))
    }
    return (
        <div className={styles.commentBlocks}>
            <div className={styles.commentsTitle}>
                <span style={{display: "flex"}}>
                    <div className={styles.commentImgContainer}>
                <img src={comment.author.img} alt="" />

                    </div>
                <div className={styles.commentsUserInf}>
                    <div>{comment.author.firstName}</div>
                    <span className={styles.addedTime}>{format(comment.createdAt)}</span>
                </div >
                
                </span>
                {userId===comment.author._id&&<div onClick={()=> handleDeleteComment(comment._id)} className={styles.deleteComment}>X</div>}
            </div>
            <div className={styles.commentText}>{comment.text}</div>
        </div>
    );
};

export default Comments;