import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './classes/profile';
import { Observable } from 'rxjs';
import { Billdetails } from './classes/billdetails';
import { Connectiondetails } from './classes/connectiondetails';
import { Paymentdetails } from './classes/paymentdetails';
import { Dashboard } from './classes/dashboard';
import { Payment } from './classes/payment';
import { Receipts } from './classes/receipts';
import { Adminprofile } from '../admin/classes/adminprofile';
import { Monthchart } from './classes/monthchart';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {

  private url = 'http://localhost:8080/';
  constructor(private client: HttpClient) { }
  ngOnInit(){
    
  }

  getCustomerDataByIDForProfile(customerId:any):Observable<Profile> {
    this.url = 'http://localhost:8080/';
    return this.client.get<Profile>(`${this.url}customerProfile/${customerId}`);
  }

  getBillDetails() {
    this.url = 'http://localhost:8080/showbill';
    return this.client.get(this.url);
  }

  searchBill(meterNo: any): Observable<Billdetails[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Billdetails[]>(`${this.url}showAllBillForCustomer/${meterNo}`);
  }

  searchBillByMonths(meterNo:any, month: any): Observable<Billdetails[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Billdetails[]>(`${this.url}showAllBillBymonth/${meterNo}/${month}`);
  }

  searchConnectionDetails(meterNo: any): Observable<Connectiondetails>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Connectiondetails>(`${this.url}customer/${meterNo}`);
  }
  showPayment(meterNo: any): Observable<Paymentdetails[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Paymentdetails[]>(`${this.url}showPaymentForCustomer/${meterNo}`);
  }
  searchPayment(meterNo: any, month: any): Observable<Paymentdetails[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Paymentdetails[]>(`${this.url}searchpayments/${meterNo}/${month}`);
  }


  billCollection(payments:Paymentdetails){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"collect",payments);
  }

  getPaymentInfoForCollectBill(meterNo: any, month:any): Observable<Paymentdetails>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Paymentdetails>(`${this.url}getcollectbillsInfo/${meterNo}/${month}`)
  }


  //Dashboard APIs
  getTableRows(){
    this.url = 'http://localhost:8080/rowcount';
    return this.client.get<any>(this.url);
  }
  getResidentialTableRows(residential:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}residentilarowcount/${residential}`)
  }
  getBusinessTableRows(business:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}businessrowcount/${business}`)
  }
  getSmallIndustryTableRows(smallIndustry:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}smallindustryrowcount/${smallIndustry}`)
  }

  getTotalPaidAmt(fineTotal:any,meterNo:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}totalPaidAmt/${fineTotal}/${meterNo}`)
  }
  getPendingEarnings(totalBill:any,meterNo:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}totalPendingAmt/${totalBill}/${meterNo}`)
  }

  getPendingBillsRow(pendingBills:any,meterNo:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}pendingBillsRow/${pendingBills}/${meterNo}`)
  }

  getPendingBillsMonth(meterNo:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}getPendingBillMonth/${meterNo}`)
  }


//Total Bill Of January
getTotalBillOfJanuary(january:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}januaryTotal/${january}/${meterNo}`)
}
//Total Bill Of February
getTotalBillOfFebruary(february:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}februaryTotal/${february}/${meterNo}`)
}
//Total Bill Of March
getTotalBillOfMarch(march:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}marchTotal/${march}/${meterNo}`)
}
//Total Bill Of April
getTotalBillOfApril(april:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}aprilTotal/${april}/${meterNo}`)
}
//Total Bill Of May
getTotalBillOfMay(may:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}mayTotal/${may}/${meterNo}`)
}
//Total Bill Of June
getTotalBillOfJune(june:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}juneTotal/${june}/${meterNo}`)
}
//Total Bill Of July
getTotalBillOfJuly(july:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}julyTotal/${july}/${meterNo}`)
}
//Total Bill Of August
getTotalBillOfAugust(august:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}augustTotal/${august}/${meterNo}`)
}
//Total Bill Of September
getTotalBillOfSeptember(september:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}septemberTotal/${september}/${meterNo}`)
}
//Total Bill Of October
getTotalBillOfOctober(october:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}octoberTotal/${october}/${meterNo}`)
}
//Total Bill Of November
getTotalBillOfNovember(november:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}novemberTotal/${november}/${meterNo}`)
}
//Total Bill Of December
getTotalBillOfDecember(december:any,meterNo:any): Observable<Monthchart>{
  this.url = 'http://localhost:8080/';
  return this.client.get<Monthchart>(`${this.url}decemberTotal/${december}/${meterNo}`)
}



  insertTrnx(payment:Payment){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"saveTxn",payment);
  }
//Receipts Service
  getBillDetailsForReceipt(meterNo: any, month:any): Observable<Receipts>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Receipts>(`${this.url}selectAllDetails/${meterNo}/${month}`)
  }
  getJasperReport(meterNo: any, month:any): Observable<Receipts>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Receipts>(`${this.url}invoicePdf`)
  }

  getAdminsDataByID(userId:any):Observable<Adminprofile> {
    this.url = 'http://localhost:8080/';
    return this.client.get<Adminprofile>(`${this.url}adminsProfile/${userId}`);
  }
}
