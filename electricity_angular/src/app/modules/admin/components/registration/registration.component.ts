import { Component } from '@angular/core';
import { Signup } from '../../classes/signup';
import { ElectricityService } from '../../electricity.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private userservice: ElectricityService, private router: Router, private toast: NgToastService) { }
  userId: any;
  name: any;
  email: any;
  phone: any;
  password: any;
  confirmPassword: any;
  passwordsDoNotMatch: boolean = false;
  users: any;

  checkPassword() {
    this.passwordsDoNotMatch = this.password !== this.confirmPassword;
  }


  saveUser() {
    this.users = new Signup(this.userId, this.name, this.email, this.phone, this.confirmPassword);
    this.userservice.insertUser(this.users)
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
