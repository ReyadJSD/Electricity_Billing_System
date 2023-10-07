export class Receipts {
    billId?:any;
    meterNo?: any;
    name?: any;
    gender?: any;
    meterType?: any;
    district?: any;
    address?: any;
    email?: any;
    phone?: any;
    lmu?: any;
    cmu?: any;
    unit?: any;
    netBill?: any;
    rentCharge?: any;
    tax?: any;
    month?: any;
    year?: any;
    totalBill?: any;
    result?: any;
    lastDate?: any;
    receiveDate?: any;
    fineTotal?: any;
    status?: any;

    constructor(billId?:any,name?:any,address?:any,district?:any, email?:any,phone?:any,meterNo?:any,meterType?:any,lmu?:any,cmu?:any,unit?:any,result?: any,netBill?:any,rentCharge?:any,tax?:any,totalBill?:any,lastDate?:any,receiveDate?:any,fineTotal?:any,month?:any,year?:any,status?:any){
      this.billId = billId;
      this.name = name;
      this.address = address;
      this.district = district;
      this.email = email;
      this.phone = phone;
      this.meterNo = meterNo;
      this.meterType = meterType;
      this.lmu = lmu;
      this.cmu = cmu;
      this.unit = unit;
      this.result = result;
      this.netBill = netBill;
      this.rentCharge = rentCharge;
      this.tax = tax;
      this.totalBill = totalBill;
      this.lastDate = lastDate;
      this.receiveDate = receiveDate;
      this.fineTotal = fineTotal;
      this.month = month;
      this.year = year;
      this.status = status;
    }
}
