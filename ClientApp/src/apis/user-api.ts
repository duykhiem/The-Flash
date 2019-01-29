import axios, { AxiosRequestConfig } from 'axios';
const qs = require('qs');
import UserModel from 'models/user-model';

class UserApi {

    login = (username: string, password: string) => {

        const url = '/users/authenticate';
        return axios.post<UserModel>(url, { username, password });

        // const url = 'http://commerceserviceapi/episerverapi/token';

        // var requestConfig: AxiosRequestConfig = {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     }
        // };

        // var params = {
        //     grant_type: 'password',
        //     username : username,
        //     password: password
        // };

        // return axios.post(url, qs.stringify(params), requestConfig);
    }
}

export default UserApi;