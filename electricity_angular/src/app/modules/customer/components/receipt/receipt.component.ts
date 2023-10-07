import { Component } from '@angular/core';
import { Adminprofile } from 'src/app/modules/admin/classes/adminprofile';
import { Customer } from 'src/app/modules/admin/classes/customer';
import { GenerateBill } from 'src/app/modules/admin/classes/generate-bill';
import { Payment } from '../../classes/payment';
import { Receipts } from '../../classes/receipts';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  constructor(private userservice:ElectricityService, private router:Router, private route: ActivatedRoute,private toast:NgToastService ){
    this.receipts.month = 'Select a Month';
  }

 ngOnInit(){
  let userId = localStorage.getItem("userId");
    console.log(userId);
    this.userservice.getAdminsDataByID(userId).subscribe((data) => {
      this.adminprofile = data;
      this.adminprofile.userId = this.adminprofile.userId;
      this.adminprofile.name = this.adminprofile.name;
      this.adminprofile.email = this.adminprofile.email;
      this.adminprofile.phone = this.adminprofile.phone;
      this.adminprofile.password = this.adminprofile.password;
      this.adminprofile.confirmPassword = this.adminprofile.confirmPassword;
    });
}


searchAllDetailsForReceipt() {
  let meterNo = localStorage.getItem("meterNo");
  this.userservice.getBillDetailsForReceipt(meterNo,this.receipts.month).subscribe(
    data => {
      if (data) {
        console.log(data);
        this.receipts = data;
        this.receipts.billId=this.receipts.billId;
        this.receipts.name=this.receipts.name;
        this.receipts.meterNo=this.receipts.meterNo;
        this.receipts.district=this.receipts.district;
        this.receipts.address=this.receipts.address;
        this.receipts.email=this.receipts.email;
        this.receipts.phone=this.receipts.phone;
        this.receipts.meterNo=this.receipts.meterNo;
        this.receipts.meterType=this.receipts.meterType;
        this.receipts.lmu=this.receipts.lmu;
        this.receipts.cmu=this.receipts.cmu;
        this.receipts.unit=this.receipts.unit;
        this.receipts.result=this.receipts.result;
        this.receipts.netBill=this.receipts.netBill;
        this.receipts.rentCharge=this.receipts.rentCharge;
        this.receipts.tax=this.receipts.tax;
        this.receipts.totalBill=this.receipts.totalBill;
        this.receipts.lastDate=this.receipts.lastDate;
        this.receipts.receiveDate=this.receipts.receiveDate;
        this.receipts.fineTotal=this.receipts.fineTotal;
        this.receipts.month=this.receipts.month;
        this.receipts.year=this.receipts.year;
        this.receipts.status=this.receipts.status;
      } else {
        this.toast.error({detail:"ERROR",summary:'Your meterNo or month was not found.',duration:3000, position:'topCenter'});
      }
    } );
}
 adminprofile: Adminprofile = new Adminprofile(); 
 customer: Customer = new Customer();
 generatebill: GenerateBill = new GenerateBill();
 payments: Payment = new Payment();
 receipts: Receipts = new Receipts();
 japerReport(){
  window.open(`http://localhost:8080/invoicePdf?meterNo=${this.receipts.meterNo}&month=${this.receipts.month}`,"_blank");
 }
 
}
