import React from "react";
import {Metadata} from "next";

type Props = {
    children: React.ReactNode;
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params;

    return {
        title: `Post ${id} - Metadata`,
        description: `Details for post with id${id}`,
    };
}

const PostLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostLayout;