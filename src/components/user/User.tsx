import React, {FC} from 'react';
import {IUser} from "@/models/IUser";
import Link from "next/link";

type UserProps = {
    user: IUser;
}
const User: FC<UserProps> = ({user}) => {
    return (
        <div>
            <Link href={`/users/${user.id}`}><h4>{user.id} {user.name}</h4></Link>
        </div>
    );
};

export default User;