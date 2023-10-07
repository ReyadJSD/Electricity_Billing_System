import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Payment } from '../../classes/payment';
import { Receipts } from '../../classes/receipts';
import { Adminprofile } from '../../classes/adminprofile';

@Component({
  selector: 'app-collectbill',
  templateUrl: './collectbill.component.html',
  styleUrls: ['./collectbill.component.css']
})
export class CollectbillComponent {
  constructor(private userservice: ElectricityService, private router: Router, private route: ActivatedRoute, private toast: NgToastService) {
    this.month = 'Select a Month';
  }
  ngOnInit() {

  }

  meterNo: any;
  name: any;
  meterType: any;
  month: any;
  year: any;
  unit: any;
  totalBill: any;
  lastDate: Date = new Date();
  receiveDate: Date = new Date();
  fineTotal: any;
  status: any;
  payments: any;
  receipts:Receipts = new Receipts();
  adminprofile:Adminprofile = new Adminprofile()

  searchDetailsForCollectBill() {
    this.userservice.getPaymentInfoForCollectBill(this.meterNo, this.month).subscribe(
      data => {
        if (data) {
          this.payments = data;
          this.name = this.payments.name;
          this.month = this.payments.month;
          this.year = this.payments.year;
          this.meterType = this.payments.meterType;
          this.unit = this.payments.unit;
          this.totalBill = this.payments.totalBill;
          this.lastDate = this.payments.lastDate
          this.receiveDate = this.payments.receiveDate;
          this.fineTotal = this.payments.fineTotal;
          this.status = this.payments.status;
        } else {
          this.toast.error({ detail: "ERROR", summary: 'Meter Number Or Month not Found', duration: 3000, position: 'topCenter' });
        }
      }
    );
  }


  calculateFine() {
    const totalBillAmount = parseFloat(this.totalBill);
    const a = new Date(this.receiveDate);
    const b = new Date(this.lastDate);
    const differenceInDays = this.getDateDifferenceInDays(b, a);
    if (differenceInDays <= 0) {
      this.fineTotal = this.totalBill;
    }else if (differenceInDays <= 5) {
      this.fineTotal = totalBillAmount + totalBillAmount * 0.07;
      this.toast.error({ detail: "ERROR", summary: 'For Delay You have to Pay 7% Fine of Total Bill', duration: 4000, position: 'topCenter' });
    } else if (differenceInDays > 5 && differenceInDays <= 10) {
      this.toast.error({ detail: "ERROR", summary: 'For Delay You have to Pay 10% Fine of Total Bill', duration: 4000, position: 'topCenter' });
      this.fineTotal = totalBillAmount + totalBillAmount * 0.10;
    } else if (differenceInDays > 10 && differenceInDays <= 20) {
      this.toast.error({ detail: "ERROR", summary: 'For Delay You have to Pay 15% Fine of Total Bill', duration: 4000, position: 'topCenter' });
      this.fineTotal = totalBillAmount + totalBillAmount * 0.15;
    } else {
      this.toast.error({ detail: "ERROR", summary: 'For Delay more than 20 days your connection will disconnected soon', duration: 3000, position: 'topCenter' });
    }
  }

  getDateDifferenceInDays(startDate: Date, endDate: Date): number {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    return Math.round(dayDifference);
  }

  // calculateFine() {
  //   const totalBillAmount = parseFloat(this.totalBill);
  //   if(this.receiveDate > this.lastDate){
  //     this.fineTotal = totalBillAmount + totalBillAmount * 0.10;
  //   }else{
  //     this.fineTotal = 0;
  //   }
  // }


  collectBillFromCustomer() {
    this.payments = new Payment(this.meterNo,this.name,this.month,this.year,this.meterType,this.unit,this.totalBill,this.lastDate,this.receiveDate,this.fineTotal,this.status);
      if(this.receiveDate != null && this.fineTotal != null && this.status=='Not Paid') {
        this.toast.success({detail:"SUCCESS",summary:'Bill Collection Successful',duration:3000, position:'topCenter'});
        this.userservice.billCollection(this.payments)
      .subscribe(
        data => console.log("success", data),
      )
        
      }else if(this.status == 'Paid') {
        this.toast.error({detail:"ERROR",summary:'The bill has already been Colleceted',duration:3000, position:'topCenter'});

      } else {
        this.toast.error({detail:"ERROR",summary:'Faild to Collect Bill',duration:3000, position:'topCenter'});
      }
  }

  // receiptPage(meterNo:any, month:any) {
  //   this.router.navigate(['admin/receipt',meterNo,month])
  // }

  japerReport(meterNo:any, month:any){
    window.open(`http://localhost:8080/invoicePdf?meterNo=${meterNo}&month=${month}`,"_blank");
   }
}
