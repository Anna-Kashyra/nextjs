import React from 'react';
import {IComment} from "@/models/IComment";
import {commentService} from "@/services/api.comments.service";
import styles from '@/app/(comments)/comments/[id]/Comment.module.css';

type Params = {id: string};

const CommentPage = async ({params}: {params: Params}) => {

    const comment: IComment | null = await commentService.getCommentById(params.id);

    return (
        <div className={styles.comment}>
            {comment ? (
                <>
                    <p>{comment.body}</p>
                    <p><i>{comment.email}</i></p>
                </>
            ) : (
                <p>Comment not found.</p>
            )}
        </div>
    );
};

export default CommentPage;