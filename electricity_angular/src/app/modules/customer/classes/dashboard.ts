export class Dashboard {
    rowCount?: any;
    residential?: any;
    business?: any;
    smallIndustry?: any;
    totalEarning?: any;
    pendingEarning?: any;
    pendingBills?:any;
	pendingCustomer?:any;
    meterNo?:any;
	month?:any;
	totalBill?:any;
	fineTotal?:any;
	lastDate?:any;
	status?:any;
    constructor(rowCount?: any, residential?: any, smallIndustry?: any, totalEarning?: any, pendingEarning?: any,pendingBills?:any,pendingCustomer?:any,meterNo?:any,month?:any,totalBill?:any,fineTotal?:any,lastDate?:any,status?:any) {
        this.rowCount = rowCount;
        this.residential = residential;
        this.business = this.business;
        this.smallIndustry = smallIndustry;
        this.totalEarning = totalEarning;
        this.pendingEarning = pendingEarning;
        this.pendingBills = pendingBills;
        this.pendingCustomer = pendingCustomer;
        this.meterNo = meterNo;
        this.month = month;
        this.fineTotal = fineTotal;
        this.lastDate = lastDate;
        this.status = status;
    }
}
