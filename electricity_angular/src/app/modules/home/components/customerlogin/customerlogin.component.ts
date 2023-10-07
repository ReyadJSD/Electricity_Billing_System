import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Customersignin } from '../../classes/customersignin';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent {
  constructor(private userservice: ElectricityService, private router: Router,private route:ActivatedRoute, private toast: NgToastService) {
    let customerId = localStorage.getItem("CustomerId");
    if (customerId != null) {
      router.navigate(["customer"]);
    }
  }

customersignin: Customersignin = new Customersignin();
  jsignUpPage() {
    this.router.navigate(["signup"]);
  }
  customerLogin() {
    let user: Customersignin = new Customersignin(this.customersignin.customerId,this.customersignin.meterNo, this.customersignin.customerName,this.customersignin.address, this.customersignin.customerEmail, this.customersignin.customerPhone, this.customersignin.confirmPassword)
    this.userservice.customerLoginCheck(user).subscribe(response => {
      console.log(response);
      if (response != null) {
        localStorage.setItem("CustomerId", response.customerId);
        localStorage.setItem("Customer Name", response.customerName);
        localStorage.setItem("meterNo", response.meterNo);
        this.router.navigate(["customer"]);
      } else {
        this.toast.error({ detail: "ERROR", summary: 'User Id or Password is incorrect', duration: 3000, position: 'topCenter' });
      }
    })
  }

}
