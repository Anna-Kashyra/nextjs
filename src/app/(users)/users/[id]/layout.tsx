import React from "react";
import {Metadata} from "next";

type Props = {
    children: React.ReactNode;
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params;

    return {
        title: `User ${id} - Metadata`,
        description: `Details about user ${id}`,
    };
}

const UserLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;