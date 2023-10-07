import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showpaymentdetails',
  templateUrl: './showpaymentdetails.component.html',
  styleUrls: ['./showpaymentdetails.component.css']
})
export class ShowpaymentdetailsComponent {
  constructor(private userservice:ElectricityService, private router:Router, private route: ActivatedRoute){
    this.month = 'Select a Month';
  }
  meterNo:any;
  name:any;
  month:any;
  year:any;
  meterType:any;
  unit:any;
  totalBill:any;
  lastDate:any;
  receiveDate:any;
  fineTotal:any;
  status:any;
  payments:any;

  meterNo1:any;

  ngOnInit(){
    this.showPaymentDetails();
  }

  showPaymentDetails() {
    this.userservice.getPaymentDetails()
      .subscribe(response => { this.payments = response });

  }

// Search individual payment Status 

searchError: boolean = false;
  showFirstTable: boolean = true;
  searchPaymentsForIndividual() {
    this.userservice.searchPayment(this.meterNo, this.month).subscribe(data => {
      if (data != null) {
        this.payments = data;
        this.showFirstTable = false; // Hide the first table
        this.searchError = false; // No search error, data found
      } else {
        // this.showFirstTable = true; // Show the first table again
        this.searchError = true; // Set search error to true, data not found
      }
    });
  }
showAll(){
  this.userservice. getPaymentDetails ().subscribe(data => {
    this.payments = data;
    this.showFirstTable = false; // Hide the first table
    this.searchError = false; // Reset search error flag
  });
}
}
