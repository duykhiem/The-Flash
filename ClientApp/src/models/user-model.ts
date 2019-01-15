import User from '../interfaces/user';

export default class UserModel implements User {
    Id: string;
    Username: string;
    Password: string;
    FirstName: string;
    LastName: string;
    RememberMe: boolean;
    Token: string;
}