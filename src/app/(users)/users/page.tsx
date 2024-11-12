import React from 'react';
import {IUser} from "@/models/IUser";
import User from "@/components/user/User";
import styles from "@/app/(users)/users/Users.module.css";
import {userService} from "@/services/api.users.service";

const UsersPage = async () => {

    const allUsers = await userService.getAllUsers();

    return (
        <div>
            <ul className={styles.users_container}>
                {
                    allUsers.map((user: IUser) => (
                        <li key={user.id} className={styles.user_container}>
                            <User user={user}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersPage;