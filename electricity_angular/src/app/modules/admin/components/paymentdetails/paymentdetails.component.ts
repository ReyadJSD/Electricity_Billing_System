import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../../classes/payment';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent {
  constructor(private userservice:ElectricityService, private router:Router, private route: ActivatedRoute,private toast:NgToastService ){
    this.month = 'Select a Month';
    // this.year = '2023';
  }

  ngOnInit(){
  }
  meterNo:any;
  name:any;
  month:any;
  year:any;
  meterType:any;
  unit:any;
  totalBill:any;
  lastDate:any;
  receiveDate:any;
  fineTotal:any;
  status:any;
  payments:any;

  meterNo1:any;

  searchDetailsForPayment() {
    this.userservice.getBillInfoByMeterNo(this.meterNo,this.month).subscribe(
      data => {
        if (data) {
          this.payments = data;
          this.name = this.payments.name; 
          this.month = this.payments.month;
          this.year = this.payments.year;
          this.meterType = this.payments.meterType;
          this.unit = this.payments.unit;
          this.totalBill = this.payments.totalBill;
          this.fineTotal = this.payments.fineTotal;
          this.status = this.payments.status;
        } else {
          this.toast.error({detail:"ERROR",summary:'Your meterNo or month was not found.',duration:3000, position:'topCenter'});
        }
      } );
  }

  savePaymentInformation(){
    this.payments=new Payment(this.meterNo,this.name,this.month,this.year,this.meterType,this.unit,this.totalBill,this.lastDate,this.receiveDate,this.fineTotal,this.status);
    this.userservice.insertPaymentInfo(this.payments)
    .subscribe(data => {
      if(data != null) {
        this.toast.success({detail:"SUCCESS",summary:'Save Successfully',duration:3000, position:'topCenter'});
      } else {
        this.toast.error({detail:"ERROR",summary:'Faild To Save',duration:3000, position:'topCenter'});
      }
    })
  }

  showPaymentDetails() {
    this.userservice.getPaymentDetails()
      .subscribe(response => { this.payments = response });

  }

}
