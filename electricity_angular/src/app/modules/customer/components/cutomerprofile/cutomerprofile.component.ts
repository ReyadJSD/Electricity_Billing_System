import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Profile } from '../../classes/profile';

@Component({
  selector: 'app-cutomerprofile',
  templateUrl: './cutomerprofile.component.html',
  styleUrls: ['./cutomerprofile.component.css']
})
export class CutomerprofileComponent {
  constructor(private userservice: ElectricityService, private router: Router, private route: ActivatedRoute, private toast: NgToastService) {

  }
  profile: Profile = new Profile();
  ngOnInit() {
    let customerId = localStorage.getItem("CustomerId");
    console.log(customerId);
    this.userservice.getCustomerDataByIDForProfile(customerId).subscribe((data) => {
      this.profile = data;
      this.profile.customerId =  this.profile.customerId;
      this.profile.customerName =  this.profile.customerName;
      this.profile.address =  this.profile.address;
      this.profile.customerEmail =  this.profile.customerEmail;
      this.profile.customerPhone =  this.profile.customerPhone;
      this.profile.confirmPassword =  this.profile.confirmPassword;
    });
  }
}
