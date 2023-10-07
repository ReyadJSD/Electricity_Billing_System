import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  customerId:any;
  customerName:any
  meterNo:any;
  month:any;
  constructor(private router: Router) {
    this.customerId = localStorage.getItem("CustomerId");
    this.customerName = localStorage.getItem("Customer Name"); 
    if (this.customerId == null && this.customerName == null) {
      router.navigate(["home"]);
    }
  }

  

  gotoDashboard() {
    this.router.navigate(["customer/defaultdashboard"]);
  }
  newCustomerPage() {
    this.router.navigate(["customer/newcustomer"]);
  }
  
  showCustomerPage() {
    this.router.navigate(["customer/connectiondetails"]);
  }
  showBillDetailsPage() {
    this.router.navigate(["customer/billdetails"]);
  }
  
  showPaymentDetailsPage() {
    this.router.navigate(["customer/paymentdetails"]);
  }
  collectBilltPage() {
    this.router.navigate(["customer/paybill"]);
  }
  receiptPage() {
    this.router.navigate(['customer/receipt'])
  }

  isSidebarOpen: boolean = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  customerProfile() {
    this.router.navigate(["customer/cutomerprofile"]);
  }

  logout() {
    localStorage.removeItem("CustomerId");
    localStorage.removeItem("password");
    localStorage.removeItem("Customer Name");
    localStorage.removeItem("meterNo");
    this.router.navigate(["home"]);
  }

  search:any;
  searchOptinonInDashboard(){
    if(this.search == 'profile'){
      this.router.navigate(["customer/cutomerprofile"]);
    }
  }
}
