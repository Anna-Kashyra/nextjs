import React from 'react';
import {userService} from "@/services/api.users.service";
import {IUser} from "@/models/IUser";
import styles from '@/app/(users)/users/[id]/User.module.css'

type Params = {id: string};

const UserPage = async ({params}: {params: Params}) => {

    const user: IUser | null = await userService.getUserById(params.id);

    return (
        <div className={styles.user}>
            {user ? (
                <>
                    <h2>User {user.id}</h2>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                    <p>Website: {user.website}</p>
                </>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
};

export default UserPage;