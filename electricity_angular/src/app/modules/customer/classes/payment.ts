export class Payment {
    tnxId?:any;
    meterNo?:any;
    phone?:any;
    totalBill?:any;
    constructor(tnxId?:any,meterNo?:any, phone?:any,totalBill?:any){
        this.tnxId = tnxId;
        this.meterNo = meterNo;
        this.phone = phone;
        this.totalBill = totalBill;
    }

}
