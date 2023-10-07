import { Component, OnInit } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerateBill } from '../../classes/generate-bill';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-billgenerate',
  templateUrl: './billgenerate.component.html',
  styleUrls: ['./billgenerate.component.css']
})
export class BillgenerateComponent implements OnInit {
  constructor(private userservice:ElectricityService, private router:Router, private route: ActivatedRoute, private toast:NgToastService){
    this.showCustomers();
    this.showBillDetails();
    this.month = 'Select a Month';
    this.year = 'Select a Year'
  }

ngOnInit(){
  this.showBillDetails();
  this.showCustomers();
  this.calculateResult();
}

showCustomers() {
    this.userservice.getCustomers()
      .subscribe(response => { this.customers = response });
  }
  showBillDetails() {
    this.userservice.getBillDetails()
      .subscribe(response => { this.generateBills = response });
  }
   
 meterNo:any;
 meterNo1:any;
 name:any;
 address:any;
 meterType:any;
 lmu:any;
 cmu:any;
 unit:any;
 netBill:any;
 rentCharge:any;
 tax:any;
 month:any;
 year:any;
 totalBill:any;
 status:string = 'Not Paid';
 customer:any;
 customers:any;
 generateBills:any;


 searchDetailsForBillGenerate() {
  this.userservice.getBillByMeterno(this.meterNo).subscribe(
    data => {
      if (data) {
        this.generateBills = data;
        this.name = this.generateBills.name;
        this.address = this.generateBills.address;
        this.meterType = this.generateBills.meterType;
        this.lmu = this.generateBills.cmu;
        this.calculateMeterRent();
      } else {
        this.toast.error({detail:"ERROR",summary:'MeterNo was not found.',duration:3000, position:'topCenter'});
      }
    });

  this.userservice.getLastMonthUnitByMeterno(this.meterNo).subscribe(
    data => {
      if (data) {
        this.generateBills = data;
        this.lmu = this.generateBills.cmu;
        this.calculateMeterRent();
      } else {
        this.toast.error({detail:"ERROR",summary:'MeterNo was not found in Bill Details.',duration:3000, position:'topCenter'});
      }
    });
  
}
//  data(value:any){
//   this.meterNo1 = this.customers[value].meterNo
//   this.name=this.customers[value].name
//   this.address=this.customers[value].address
//   this.meterType=this.customers[value].meterType
//   this.lmu=this.customers[value].cmu
//   this.cmu=this.customers[value].null
//   this.unit=this.customers[value].null
//   this.result=this.customers[value].null
//   this.netBill=this.customers[value].null
//   this.rentCharge=this.customers[value].null
//   this.tax=this.customers[value].null
//   this.totalBill=this.customers[value].null

// }

result:any;
calculateMeterRent(){
  if(this.meterType === 'Residential'){
    this.rentCharge = 50;
  }else if(this.meterType === 'Business'){
    this.rentCharge = 100;
  }else if(this.meterType === 'Small Industry'){
    this.rentCharge = 200;
  }
}
calculateResult() {
  this.unit = this.cmu - this.lmu;  
  if(this.meterType === 'Residential'){
    if (this.unit >= 1 && this.unit <= 75) {
      this.result = 4.19;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.05;
    } else if (this.unit >= 76 && this.unit <= 200) {
      this.result = 5.72;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.05;
    }else if (this.unit >= 201 && this.unit <= 300) {
      this.result = 6.34;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.05;
    } else {
      this.result = 0; // Default value if the input is outside the specified range
      this.netBill = this.unit * this.result;
      this.tax = 0;
    }  
  }else if(this.meterType === 'Business'){
    if (this.unit >= 1 && this.unit <= 75) {
      this.result = 7.70; 
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.07;
    } else if (this.unit >= 76 && this.unit <= 200) {
      this.result = 8.20;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.07;
    }else if (this.unit >= 201 && this.unit <= 300) {
      this.result = 9.20;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.07;
    } else {
      this.result = 0; // Default value if the input is outside the specified range
      this.netBill = this.unit * this.result;
      this.tax = 0;
    }
    
  }
  else if(this.meterType === 'Small Industry'){
    if (this.unit >= 1 && this.unit <= 150) {
      this.result = 8.53;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.08;
    } else if (this.unit >= 151 && this.unit <= 350) {
      this.result = 9.65;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.08;
    }else if (this.unit >= 351 && this.unit <= 500) {
      this.result = 12.15;
      this.netBill = this.unit * this.result;
      this.tax = this.netBill*.08;
    } else {
      this.result = 0; // Default value if the input is outside the specified range
      this.netBill = this.unit * this.result;
      this.tax = 0;
    }
    
  }else{
    this.result = 0; // Default value if the input is outside the specified range
  }
    
   
}

calculateTotal(){
  this.totalBill = parseFloat(this.netBill) + parseFloat(this.rentCharge) + parseFloat(this.tax);
  parseFloat(this.totalBill).toFixed(2);
}

saveBillInformation(){
  this.netBill = this.netBill.toFixed(3);
  this.tax = this.tax.toFixed(3);
  this.totalBill = this.totalBill.toFixed(3);
  // this.month += '-01';
  this.customer=new GenerateBill(this.meterNo,this.name,this.address,this.meterType,this.lmu,this.cmu,this.unit,this.result,this.netBill,this.rentCharge,this.tax,this.month,this.year,this.totalBill,this.status);
  this.userservice.insertBillInfo(this.customer)
  .subscribe(data => {
    if(data != null) {
      this.toast.success({detail:"SUCCESS",summary:'Save Successfully',duration:3000, position:'topCenter'});
    } else {
      this.toast.error({detail:"ERROR",summary:'Faild to save data.',duration:3000, position:'topCenter'});
    }
  });

}
}
