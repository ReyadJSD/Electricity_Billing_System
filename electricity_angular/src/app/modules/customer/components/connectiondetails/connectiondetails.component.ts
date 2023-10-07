import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Connectiondetails } from '../../classes/connectiondetails';

@Component({
  selector: 'app-connectiondetails',
  templateUrl: './connectiondetails.component.html',
  styleUrls: ['./connectiondetails.component.css']
})
export class ConnectiondetailsComponent {
  constructor(private userservice:ElectricityService, private router:Router, private route:ActivatedRoute){}
    

connectiondetails: Connectiondetails = new Connectiondetails();
  ngOnInit() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.searchConnectionDetails(meterNo).subscribe(data => {
      this.connectiondetails = data;
      this.connectiondetails.name=this.connectiondetails.name;
      this.connectiondetails.gender=this.connectiondetails.gender;
      this.connectiondetails.meterNo=this.connectiondetails.meterNo;
      this.connectiondetails.meterType=this.connectiondetails.meterType;
      this.connectiondetails.issueDate=this.connectiondetails.issueDate;
      this.connectiondetails.district=this.connectiondetails.district;
      this.connectiondetails.address=this.connectiondetails.address;
      this.connectiondetails.email=this.connectiondetails.email;
      this.connectiondetails.phone=this.connectiondetails.phone;
    });
  }
}


