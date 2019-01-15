import axios, { AxiosRequestConfig } from 'axios';
import UserModel from 'models/user-model';

import UserData from '../interfaces/user';

class UserApi {

    login = (username: string, password: string) => {

        const url = '/users/authenticate';

        // var requestConfig: AxiosRequestConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NDc0OTg5MjEsImV4cCI6MTU0ODEwMzcyMSwiaWF0IjoxNTQ3NDk4OTIxfQ.YgqLVmzIktMXRb9rw9CUTrzr-myqah8b3bP6OBbU3kg' 
        //     }
        // };

        return axios.post<UserModel>(url, {username, password});
    }
}

export default UserApi;