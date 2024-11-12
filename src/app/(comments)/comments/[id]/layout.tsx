import React from "react";
import {Metadata} from "next";

type Props = {
    children: React.ReactNode;
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params;

    return {
        title: `Comment ${id} - Metadata`,
        description: `Details for comment with id${id}`,
    };
}

const CommentLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CommentLayout;