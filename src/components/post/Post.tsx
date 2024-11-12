import React, {FC} from 'react';
import {IPost} from "@/models/IPost";
import styles from '@/components/post/Post.module.css';

type PostProps = {
    post: IPost;
}

const Post: FC<PostProps> = ({post}) => {
    return (
        <>
            <h4>{post.id} {post.title}</h4>
            <p className={styles.text}>{post.body}</p>
        </>
    );
};


export default Post;