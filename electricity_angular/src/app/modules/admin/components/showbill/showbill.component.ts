import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showbill',
  templateUrl: './showbill.component.html',
  styleUrls: ['./showbill.component.css']
})
export class ShowbillComponent {
  meterNo: any;
    name: any;
    address: any;
    meterType: any;
    lmu: any;
    cmu: any;
    unit: any;
    netBill: any;
    rentCharge: any;
    tax: any;
    month: any;
    totalBill: any;
    status: any;
    result: any;
    generateBill:any
    generateBills:any;
  constructor(private userservice:ElectricityService, private router:Router, private route:ActivatedRoute){
    this.showBillDetails();
    this.month = 'Select a Month';
  }
  ngOnInit(){
    this.showBillDetails();
  }
  
  showBillDetails() {
      this.userservice.getBillDetails()
        .subscribe(response => { this.generateBills = response });
    }

  searchError: boolean = false;
  showFirstTable: boolean = true;
  searchBillsForIndivisual() {
    this.userservice.searchBill(this.meterNo, this.month).subscribe(data => {
      if (data != null) {
        this.generateBills = data;
        this.showFirstTable = false; // Hide the first table
        this.searchError = false; // No search error, data found
      } else {
        // this.showFirstTable = true; // Show the first table again
        this.searchError = true; // Set search error to true, data not found
      }
    });
  }
showAll(){
  this.userservice. getBillDetails().subscribe(data => {
    this.generateBills = data;
    this.showFirstTable = false; // Hide the first table
    this.searchError = false; // Reset search error flag
  });
}
}
