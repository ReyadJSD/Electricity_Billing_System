import { Component } from '@angular/core';
import { Profile } from '../../classes/profile';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Paymentdetails } from '../../classes/paymentdetails';
import { Payment } from '../../classes/payment';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css']
})
export class PaybillComponent {
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
  // receipts:Receipts = new Receipts();
  adminprofile:Profile = new Profile()
  payment: Payment = new Payment()

  searchDetailsForCollectBill() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getPaymentInfoForCollectBill(meterNo, this.month).subscribe(
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

  saveTransactionInfo(){
    let meterNo = localStorage.getItem("meterNo");
    this.payment = new Payment(this.payment.tnxId,meterNo,this.payment.phone, this.totalBill)
    this.userservice.insertTrnx(this.payment)
    .subscribe(data => {
      if(data != null) {
        this.toast.success({detail:"SUCCESS",summary:'Save Successfully',duration:3000, position:'topCenter'});
      } else {
        this.toast.error({detail:"ERROR",summary:'Faild To Save',duration:3000, position:'topCenter'});
      }
    })
  }

  collectBillFromCustomer() {
    this.generateTransactionId();
    let meterNo = localStorage.getItem("meterNo");
    this.payments = new Paymentdetails(meterNo,this.name,this.month,this.year,this.meterType,this.unit,this.totalBill,this.lastDate,this.receiveDate,this.fineTotal,this.status);
      if(this.receiveDate != null && this.fineTotal != null && this.status=='Not Paid') {
        this.toast.success({detail:"SUCCESS",summary:'Bill Collection Successful',duration:3000, position:'topCenter'});
        this.saveTransactionInfo();
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

  receiptPage(meterNo:any, month:any) {
    this.router.navigate(['admin/receipt',meterNo,month])
  }

  //Code for Payment Method
  selectedPaymentMethod: any;
    phone: any;
    pinNumber: any;
    tnxId: any;
    transactionIdGenerated: boolean = false;

    generateTransactionId() {
        // Generate transaction ID in the format "TD-BL57LK8"
        const randomPart = Math.random().toString(36).substr(2, 8).toUpperCase();
        this.payment.tnxId = `TD-${this.selectedPaymentMethod.toUpperCase()}${randomPart}`;
        this.transactionIdGenerated = true;
    }
}
