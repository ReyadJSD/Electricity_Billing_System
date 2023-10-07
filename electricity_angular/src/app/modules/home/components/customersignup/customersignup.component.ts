import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Signup } from '../../classes/signup';

@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent {
  constructor(private userservice: ElectricityService, private router: Router, private toast: NgToastService) { }
  signup: Signup = new Signup();
  passwordsDoNotMatch: boolean = false;
  users: any;

  checkPassword() {
    this.passwordsDoNotMatch = this.signup.password !== this.signup.confirmPassword;
  }


  saveUser() {
    this.signup = new Signup(this.signup.customerId,this.signup.meterNo, this.signup.customerName,this.signup.address, this.signup.customerEmail, this.signup.customerPhone, this.signup.confirmPassword);
    this.userservice.insertUser(this.signup)
      .subscribe(data => {
        if(data != null) {
          this.toast.success({detail:"SUCCESS",summary:'Save Successfully',duration:3000, position:'topCenter'});
        } else {
          this.toast.error({detail:"ERROR",summary:'Faild To Save',duration:3000, position:'topCenter'});
        }
      })
    // this.router.navigate(["login"]);
    
  }
}
