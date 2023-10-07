export class Connectiondetails {
    name?:any;
  gender?:any;
  meterNo?:any;
  meterType?:any;
  issueDate?:any;
  district?:any;
  address?:any;
  email?:any;
  phone?:any;
  
    constructor(name?:any, gender?:any,meterNo?:any, meterType?:any, issueDate?:any, district?:any, address?:any, email?:any, phone?:any){
        this.name=name;
        this.gender = gender;
        this.meterNo = meterNo;
        this.meterType = meterType;
        this.issueDate = issueDate;
        this.district = district;
        this.address = address;
        this.email = email;
        this.phone = phone;

    }
}
