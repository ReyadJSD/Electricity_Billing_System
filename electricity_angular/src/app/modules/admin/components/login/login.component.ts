import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Signin } from '../../classes/signin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userservice: ElectricityService, private router: Router,private route:ActivatedRoute, private toast: NgToastService) {
    let userId = localStorage.getItem("userId");
    let name = localStorage.getItem("name");
    if (userId != null && name != null) {
      router.navigate(["admin"]);
    }
  }

signin: Signin = new Signin();
  jsignUpPage() {
    this.router.navigate(["signup"]);
  }
  login() {
    let user: Signin = new Signin(this.signin.userId, this.signin.name, this.signin.email, this.signin.password)
    this.userservice.loginCheck(user).subscribe(response => {
      if (response != null) {
        localStorage.setItem("userId", response.userId);
        localStorage.setItem("name", response.name);
        this.router.navigate(['admin']);
      } else {
        this.toast.error({ detail: "ERROR", summary: 'User Id or Password is incorrect', duration: 3000, position: 'topCenter' });
      }
    })
  }
}
