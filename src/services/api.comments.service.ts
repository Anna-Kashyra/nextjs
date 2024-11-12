import {IComment} from "@/models/IComment";

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    commentBaseUrl: '/comments',
    allComments: () => baseUrl + urlBuilder.commentBaseUrl,
    singleComment: (id: string | number) => baseUrl + urlBuilder.commentBaseUrl + '/' + id,
}

const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        const comments: IComment[] = await fetch(urlBuilder.allComments())
            .then(value => value.json());
        return comments
    },
    getCommentById: async (id: string | number): Promise<IComment | null> => {
        const comment: IComment = await fetch(urlBuilder.singleComment(id))
            .then(value => value.json());
        return comment;
    }
}

export {commentService};