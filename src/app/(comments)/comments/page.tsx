import React from 'react';
import {commentService} from "@/services/api.comments.service";
import {IComment} from "@/models/IComment";
import Comment from "@/components/comment/Comment";
import styles from '@/app/(comments)/comments/Comments.module.css'
import Link from "next/link";


const CommentsPage = async () => {

    const allComments = await commentService.getAllComments();

    return (
        <div>
            <ul className={styles.comments_container}>
                {
                    allComments.map((comment: IComment) => (
                        <li key={comment.id} className={styles.comment_container}>
                            <Link href={`/comments/${comment.id}`}>
                                <Comment item={comment}/>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CommentsPage;