import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  constructor(private userservice: ElectricityService, private router: Router, private route: ActivatedRoute, private toast: NgToastService) {

  }
  userId: any;
  name: any;
  email: any;
  phone: any;
  password: any;
  confirmPassword: any;
  user: any;

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    console.log(userId);
    this.userservice.getAdminsDataByID(userId).subscribe((data) => {
      this.user = data;
      this.name = this.user.name;
      this.email = this.user.email;
      this.password = this.user.password;
      this.confirmPassword = this.user.confirmPassword;
    });
  }
}
