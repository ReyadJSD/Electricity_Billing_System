export class Signup {
    userId?:any;
    name?:any;
    email?:any;
    phone?:any;
    password?: any;
    confirmPassword?: any;
    constructor(userId?: any, name?: any, email?: any, phone?:any, confirmPassword?:any) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.confirmPassword = confirmPassword;
    }
}
