import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Billdetails } from '../../classes/billdetails';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent {
  constructor(private userservice:ElectricityService, private router:Router, private route:ActivatedRoute){
    this.billdetails.month = 'Select a Month';
  }
  billdetails: Billdetails = new Billdetails();
  billdetail:any;
  ngOnInit(){
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.searchBill(meterNo).subscribe(data => {
      if (data != null) {
        this.billdetail = data;
      } else {
        // this.showFirstTable = true; // Show the first table again
        this.searchError = true; // Set search error to true, data not found
      }
    });
  }
    
  searchError: boolean = false;
  showFirstTable: boolean = true;
  searchBillsByMonth() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.searchBillByMonths(meterNo,this.billdetails.month).subscribe(data => {
      if (data != null) {
        this.billdetail = data;
        this.showFirstTable = false; // Hide the first table
        this.searchError = false; // No search error, data found
      } else {
        // this.showFirstTable = true; // Show the first table again
        this.searchError = true; // Set search error to true, data not found
      }
    });
  }

showAll(){
  let meterNo = localStorage.getItem("meterNo");
    this.userservice.searchBill(meterNo).subscribe(data => {
      if (data != null) {
        this.billdetail = data;
      }
    this.showFirstTable = false; // Hide the first table
    this.searchError = false; // Reset search error flag
  });
}
}
