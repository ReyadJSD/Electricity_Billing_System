import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defaulthome',
  templateUrl: './defaulthome.component.html',
  styleUrls: ['./defaulthome.component.css']
})
export class DefaulthomeComponent {
  constructor(private router: Router) {}
  loginPage() {
    this.router.navigate(['customerlogin'])
  }
  signupPage() {
    this.router.navigate(['customersignup'])
  }

  homePage() {
    this.router.navigate(['homepage'])
  }
  aboutusPage() {
    this.router.navigate(['aboutus'])
  }

}
