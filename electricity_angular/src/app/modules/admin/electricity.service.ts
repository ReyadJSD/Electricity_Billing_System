import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './classes/customer';
import { GenerateBill } from './classes/generate-bill';
import { Payment } from './classes/payment';
import { Signup } from './classes/signup';
import { Adminprofile } from './classes/adminprofile';
import { Receipts } from './classes/receipts';
import { Dashboard } from './classes/dashboard';
import { Signin } from './classes/signin';


@Injectable({
  providedIn: 'root'
})
export class ElectricityService {
  private url = 'http://localhost:8080/';
  constructor(private client: HttpClient) { }
  ngOnInit(){
    this.url = 'http://localhost:8080/allcus';
    this.url = 'http://localhost:8080/showbill';
    this.url = 'http://localhost:8080/showpaymentdetails';
  }
  insertUser(electricity:Signup){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"save",electricity);
  }
  getCustomers() {
    this.url = 'http://localhost:8080/allcus';
    
    return this.client.get(this.url);
  }
  getBillDetails() {
    this.url = 'http://localhost:8080/showbill';
    return this.client.get(this.url);
  }

  getCustomerByMeterno(meterNo: any): Observable<Customer>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Customer>(`${this.url}customer/${meterNo}`)
  }
  getBillByMeterno(meterNo: any): Observable<GenerateBill>{
    this.url = 'http://localhost:8080/';
    return this.client.get<GenerateBill>(`${this.url}bills/${meterNo}`)
  }
  getLastMonthUnitByMeterno(meterNo: any): Observable<GenerateBill>{
    this.url = 'http://localhost:8080/';
    return this.client.get<GenerateBill>(`${this.url}lmu/${meterNo}`)
  }
  getBillInfoByMeterNo(meterNo: any, month:any): Observable<Payment>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Payment>(`${this.url}getbillsInfo/${meterNo}/${month}`)
  }
  getPaymentInfoForCollectBill(meterNo: any, month:any): Observable<Payment>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Payment>(`${this.url}getcollectbillsInfo/${meterNo}/${month}`)
  }
  insertCustomer(customer:Customer){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"savecstm",customer);
  }

  modifyCustomer(customer:Customer){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"updatecus",customer);
  }

  removeCustomer(customer:Customer){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"delete",customer);
  }
  customerSearch(meterNo: string): Observable<Customer[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Customer[]>(`${this.url}searchCustomer/${meterNo}`);
  }
  searchBill(meterNo: any, month: any): Observable<GenerateBill[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<GenerateBill[]>(`${this.url}searchbill/${meterNo}/${month}`);
  }

  insertBillInfo(customer:GenerateBill){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"savebill",customer);
  }
  insertPaymentInfo(payment:Payment){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"savepayment",payment);
  }

  getPaymentDetails () {
    this.url = 'http://localhost:8080/showpaymentdetails';
    return this.client.get(this.url);
  }
  searchPayment(meterNo: any, month: any): Observable<Payment[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Payment[]>(`${this.url}searchpayments/${meterNo}/${month}`);
  }

  loginCheck(user: Signin): Observable<Signin> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Signin>(`${this.url}login`, user);
  }
  billCollection(payments:Payment){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"collect",payments);
  }

  getAdminsDataByID(userId:any):Observable<Adminprofile> {
    this.url = 'http://localhost:8080/';
    return this.client.get<Adminprofile>(`${this.url}adminsProfile/${userId}`);
  }

  getBillDetailsForReceipt(meterNo: any, month:any): Observable<Receipts>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Receipts>(`${this.url}selectAllDetails/${meterNo}/${month}`)
  }
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

  getTotalEarnings(totalEarning:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}earnings/${totalEarning}`)
  }
  getPendingEarnings(pendingEarning:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}pendingEarnings/${pendingEarning}`)
  }

  getPendingBillsRow(pendingBills:any): Observable<Dashboard>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Dashboard>(`${this.url}pendingBillsRow/${pendingBills}`)
  }

}
