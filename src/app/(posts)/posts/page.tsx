import React from 'react';
import {postService} from "@/services/api.posts.service";
import {IPost} from "@/models/IPost";
import Post from "@/components/post/Post";
import styles from '@/app/(posts)/posts/Posts.module.css';
import Link from "next/link";

const PostsPage = async () => {

    const allPosts = await postService.getAllPosts();

    return (
        <div>
            <ul className={styles.posts_container}>
                {
                    allPosts.map((post: IPost) => (
                        <li key={post.id} className={styles.post_container}>
                            <Link href={`/posts/${post.id}`}>
                                <Post post={post}/>
                            </Link>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostsPage;