export class Dashboard {
    rowCount?: any;
    residential?: any;
    business?: any;
    smallIndustry?: any;
    totalEarning?: any;
    pendingEarning?: any;
    pendingBills?:any;
	pendingCustomer?:any;
    constructor(rowCount?: any, residential?: any, smallIndustry?: any, totalEarning?: any, pendingEarning?: any,pendingBills?:any,pendingCustomer?:any) {
        this.rowCount = rowCount;
        this.residential = residential;
        this.business = this.business;
        this.smallIndustry = smallIndustry;
        this.totalEarning = totalEarning;
        this.pendingEarning = pendingEarning;
        this.pendingBills = pendingBills;
        this.pendingCustomer = pendingCustomer;

    }
}
