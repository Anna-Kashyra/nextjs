import {IPost} from "@/models/IPost";

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    postBaseUrl: '/posts',
    allPosts: () => baseUrl + urlBuilder.postBaseUrl,
    singlePost: (id: string | number) => baseUrl + urlBuilder.postBaseUrl + '/' + id,
}

const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        const posts: IPost[] = await fetch(urlBuilder.allPosts())
            .then(value => value.json());
        return posts;
    },
    getPostById: async (id: string | number): Promise<IPost | null> => {
        const post: IPost = await fetch(urlBuilder.singlePost(id))
            .then(value => value.json());
        return post;
    }
}

export {postService};