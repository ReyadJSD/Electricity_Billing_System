import { Component } from '@angular/core';
import { Signin } from '../../signin';
import { ElectricityService } from '../../electricity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userservice:ElectricityService, private router:Router){
    this.userId = localStorage.getItem("userId");
    if(this.userId != null) {
      router.navigate(["admin"]);
    }
  }
  userId:any;
  password:any;


  jsignUpPage(){
    this.router.navigate(["signup"]);
  }
  login() {
    let user: Signin = new Signin(this.userId, this.password)
    this.userservice.loginCheck(user).subscribe(response => {
      console.log(response)
      let d: any = response;
      console.log(d.status);
      
      if(d.status == "success") {
        localStorage.setItem("userId", this.userId);
        this.router.navigate(['admin']);
      } else {
        alert("Username or Password is wrong");
      }
    })
  }
}
