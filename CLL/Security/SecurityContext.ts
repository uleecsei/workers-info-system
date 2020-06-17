import { User } from "./Identitty/User";

export class SecurityContext{
    user: User
    constructor(userData: User){
        this.user = userData;
    }
    getUser(){
        return this.user;
    }
    editUser(user: User){
        this.user = user;
    }
}