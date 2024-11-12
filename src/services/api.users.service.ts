import {IUser} from "@/models/IUser";

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => baseUrl + urlBuilder.userBaseUrl,
    singleUser: (id: string | number) => baseUrl + urlBuilder.userBaseUrl + '/' + id,
}

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(urlBuilder.allUsers())
            .then(value => value.json());
    },
    getUserById: async (id: string | number): Promise<IUser | null> => {
        return await fetch(urlBuilder.singleUser(id))
            .then(value => value.json());
    }
}

export {userService};