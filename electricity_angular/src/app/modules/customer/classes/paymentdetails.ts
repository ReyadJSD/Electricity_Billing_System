export class Paymentdetails {
    meterNo?: any;
  name?: any;
  month?: any;
  year?: any;
  meterType?: any;
  unit?: any;
  totalBill?: any;
  lastDate?: any;
  receiveDate?: any;
  fineTotal?: any;
  status?: any;
  constructor(meterNo?: any, name?: any, month?: any, year?: any, meterType?: any, unit?: any, totalBill?: any, lastDate?: any, receiveDate?: any, fineTotal?: any, status?: any) {
    this.meterNo = meterNo;
    this.name = name;
    this.month = month;
    this.year = year;
    this.meterType = meterType;
    this.unit = unit;
    this.totalBill = totalBill;
    this.lastDate = lastDate;
    this.receiveDate = receiveDate;
    this.fineTotal = fineTotal;
    this.status = status;
  }
}
