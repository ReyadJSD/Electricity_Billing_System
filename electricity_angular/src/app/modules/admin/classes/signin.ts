export class Signin {
    userId?: any;
    name?: any;
    email?: any;
    password?: any
    constructor(userId?: any, name?:any, email?:any,password?: any) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
