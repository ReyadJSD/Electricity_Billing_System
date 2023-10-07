import { Component } from '@angular/core';
import { Applyconnection } from '../../classes/applyconnection';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-newconnection',
  templateUrl: './newconnection.component.html',
  styleUrls: ['./newconnection.component.css']
})
export class NewconnectionComponent {
  name:any;
  gender:any;
  meterNo:any;
  meterType:any;
  issueDate:any;
  district:any;
  address:any;
  email:any;
  phone:any;
  applyconnection:any
  
  constructor(private userservice:ElectricityService, private router:Router, private route:ActivatedRoute, private formBuilder: FormBuilder, private toast:NgToastService){
    
  }
  userId: any;
  
  signout() {
    localStorage.removeItem("userId");
    this.router.navigate(["home"]);
  }
  newCustomerPage(){
    this.router.navigate(["newcustomer"]);
  }
  generateBillPage(){
    this.router.navigate(["billgenerate"]);
  }
  showCustomerPage(){
    this.router.navigate(["showcustomer"]);
  }
  showBillDetailsPage(){
    this.router.navigate(["showbill"]);
  }


  saveCustomer(){
    this.applyconnection=new Applyconnection(this.name,this.gender,this.meterNo,this.meterType,this.issueDate,this.district,this.address,this.email,this.phone);
    this.userservice.insertCustomer(this.applyconnection)
    .subscribe(data => {
      if(data != null) {
        this.toast.success({detail:"SUCCESS",summary:'Save Successfully',duration:3000, position:'topCenter'});
      } else {
        this.toast.error({detail:"ERROR",summary:'Faild To Save',duration:3000, position:'topCenter'});
      }
    })
  }
  
   adminPage(){
    this.router.navigate(["home"]);
  }
}
