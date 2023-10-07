import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../classes/customer';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent {
  name:any;
  gender:any;
  meterNo:any;
  meterType:any;
  issueDate:any;
  district:any;
  address:any;
  email:any;
  phone:any;
  customer:any
  customers:any;
  
  
  constructor(private userservice:ElectricityService, private router:Router, private route:ActivatedRoute){
   
    this.showCustomers();
  }

ngOnInit(){
  this.showCustomers();
}

showCustomers() {
    this.userservice.getCustomers()
      .subscribe(response => { this.customers = response;
        if (this.customers.length > 0) {
          this.issueDate = this.customers[0].date;
        } });
  }
  updatePage(meterNo:any) {
    this.router.navigate(["admin/updatecustomer", meterNo]);
  }
  deletePage(meterNo:any) {
    console.log(meterNo);
    this.customer = new Customer(this.name,this.gender,meterNo,this.meterType,this.issueDate,this.district,this.address,this.email,this.phone);
    this.userservice.removeCustomer(this.customer)
      .subscribe(
        data =>this.showCustomers()
      );
  }
  searchError: boolean = false;
  showFirstTable: boolean = true;
  searchCustomer() {
    this.userservice.customerSearch(this.meterNo).subscribe(data => {
      if (data != null) {
        this.customer = data;
        this.showFirstTable = false; // Hide the first table
        this.searchError = false; // No search error, data found
      } else {
        // this.showFirstTable = true; // Show the first table again
        this.searchError = true; // Set search error to true, data not found
      }
    });
  }
showAll(){
  this.userservice.getCustomers().subscribe(data => {
    this.customer = data;
    this.showFirstTable = false; // Hide the first table
    this.searchError = false; // Reset search error flag
  });
}
}
