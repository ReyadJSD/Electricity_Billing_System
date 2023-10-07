import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Paymentdetails } from '../../classes/paymentdetails';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent {
  constructor(private userservice: ElectricityService, private router: Router, private route: ActivatedRoute, private toast: NgToastService) {
    this.paymentdetails.month = 'Select a Month';
    // this.year = '2023';
  }
  paymentdetail: any;
  ngOnInit(){
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.showPayment(meterNo).subscribe(data => {
      if (data != null) {
        this.paymentdetail = data;
      } else {
        // this.showFirstTable = true; // Show the first table again
        this.searchError = true; // Set search error to true, data not found
      }
    });
  }
  paymentdetails: Paymentdetails = new Paymentdetails();

  searchError: boolean = false;
  showFirstTable: boolean = true;
  searchPaymentsForIndividual() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.searchPayment(meterNo, this.paymentdetails.month).subscribe(data => {
      if (data != null) {
        this.paymentdetail = data;
        this.showFirstTable = false; // Hide the first table
        this.searchError = false; // No search error, data found
      } else {
        // this.showFirstTable = true; // Show the first table again
        this.searchError = true; // Set search error to true, data not found
      }
    });
  }
  showAll() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.showPayment(meterNo).subscribe(data => {
      if (data != null) {
        this.paymentdetail = data;
        // No search error, data found
      }
      this.showFirstTable = false; // Hide the first table
      this.searchError = false; // Reset search error flag
    });
  }
}
