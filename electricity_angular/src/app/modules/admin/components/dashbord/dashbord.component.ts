import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  userId:any;
  name:any;
  meterNo:any;
  month:any;
  constructor(private router: Router) {
    this.userId = localStorage.getItem("userId"); 
    this.name = localStorage.getItem("name"); 
    if (this.userId == null && this.name == null) {
      router.navigate(["admin/login"]);
    }
  }

  gotoDashboard() {
    this.router.navigate(["admin/defaultdashboard"]);
  }
  newCustomerPage() {
    this.router.navigate(["admin/newcustomer"]);
  }
  generateBillPage() {
    this.router.navigate(["admin/billgenerate"]);
  }
  showCustomerPage() {
    this.router.navigate(["admin/showcustomer"]);
  }
  showBillDetailsPage() {
    this.router.navigate(["admin/showbill"]);
  }
  createPaymentDetailsPage(){
    this.router.navigate(["admin/paymentdetails"]);
  }
  showPaymentDetailsPage() {
    this.router.navigate(["admin/showpaymentdetails"]);
  }
  collectBilltPage() {
    this.router.navigate(["admin/collectbill"]);
  }
  receiptPage() {
    this.router.navigate(['admin/searchreceipt'])
  }

  isSidebarOpen: boolean = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  adminProfile() {
    this.router.navigate(["admin/adminprofile"]);
  }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    this.router.navigate(["admin/login"]);
  }

  search:any;
  searchOptinonInDashboard(){
    if(this.search == 'profile'){
      this.router.navigate(["admin/adminprofile"]);
    }
    else if(this.search == 'new customer'){
      this.router.navigate(["admin/newcustomer"]);
    }
    else if(this.search == 'all customer'){
      this.router.navigate(["admin/showcustomer"]);
    }
    else if(this.search == 'bill generate'){
      this.router.navigate(["admin/billgenerate"]);
    }

  }

}
