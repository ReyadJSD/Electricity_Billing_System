export class Profile {
    customerId?:any;
    customerName?:any;
    address?:any;
    customerEmail?:any;
    customerPhone?:any;
    password?: any;
    confirmPassword?: any;

    
    constructor(customerId?: any, customerName?: any,address?:any, customerEmail?: any, customerPhone?:any, confirmPassword?:any) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.customerEmail = customerEmail;
        this.customerPhone = customerPhone;
        this.confirmPassword = confirmPassword;
    }
}
