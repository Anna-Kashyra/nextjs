import React, {FC} from 'react';
import {IComment} from "@/models/IComment";

type CommentProps = {
    item: IComment;
}

const Comment: FC<CommentProps> = ({item}) => {
    return (
        <>
            <p>{item.body}</p>
            <p><i>{item.email}</i></p>
        </>
    );
};


export default Comment;