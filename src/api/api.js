import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


