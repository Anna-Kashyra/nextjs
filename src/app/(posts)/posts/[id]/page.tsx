import React from 'react';
import {postService} from "@/services/api.posts.service";
import {IPost} from "@/models/IPost";
import styles from '@/app/(posts)/posts/[id]/Post.module.css';

type Params = {id: string};

const PostPage = async ({params}: {params: Params}) => {

    const post: IPost | null = await postService.getPostById(params.id);

    return (
        <div className={styles.post}>
            {post ? (
                <>
                    <h4>{post.id} {post.title}</h4>
                    <p>{post.body}</p>
                </>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
};



export default PostPage;