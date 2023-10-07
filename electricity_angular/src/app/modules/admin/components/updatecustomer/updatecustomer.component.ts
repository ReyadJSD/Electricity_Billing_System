import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../classes/customer';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent {
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

  constructor(private userservice:ElectricityService, private router:Router, private route:ActivatedRoute){}
    
    adminPage(){
    this.router.navigate(["admin"]);
  }


  ngOnInit() {
    let meterNo = this.route.snapshot.params['meterNo'];
    
    this.userservice.getCustomerByMeterno(meterNo).subscribe(data => {
      this.customer = data;
      this.name=this.customer.name;
      this.gender=this.customer.gender;
      this.meterNo=this.customer.meterNo;
      this.meterType=this.customer.meterType;
      this.issueDate=this.customer.issueDate;
      this.district=this.customer.district;
      this.address=this.customer.address;
      this.email=this.customer.email;
      this.phone=this.customer.phone;
    });
  }
  updateCustomer() {
    this.customer = new Customer(this.name, this.gender, this.meterNo, this.meterType,this.issueDate,this.district,this.address,this.email,this.phone);
    this.userservice.modifyCustomer(this.customer)
      .subscribe(
        data => console.log("success", data),
      )
    this.router.navigate(['showcustomer'])
  }
}
