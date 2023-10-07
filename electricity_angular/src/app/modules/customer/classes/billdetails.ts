export class Billdetails {
    meterNo?: any;
    name?: any;
    address?: any;
    meterType?: any;
    lmu?: any;
    cmu?: any;
    unit?: any;
    netBill?: any;
    rentCharge?: any;
    tax?: any;
    month?: any;
    year?:any;
    totalBill?: any;
    status?: string;
    result?: any;

    constructor(meterNo?: any, name?: any, address?: any, meterType?: any, lmu?: any, cmu?: any, unit?: any, result?: any, netBill?: any, rentCharge?: any, tax?: any, month?: any,year?:any, totalBill?: any, status?: string) {
        this.meterNo = meterNo;
        this.name = name;
        this.address = address;
        this.meterType = meterType;
        this.lmu = lmu;
        this.cmu = cmu;
        this.unit = unit;
        this.result = result;
        this.netBill = netBill;
        this.rentCharge = rentCharge;
        this.tax = tax;
        this.month = month;
        this.year = year;
        this.totalBill = totalBill;
        this.status = status;
    }
}
