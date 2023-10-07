import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { GenerateBill } from '../../classes/generate-bill';
import { Payment } from '../../classes/payment';
import { Adminprofile } from '../../classes/adminprofile';
import { Receipts } from '../../classes/receipts';
import { Customer } from '../../classes/customer';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
 constructor(private userservice:ElectricityService, private router:Router, private route: ActivatedRoute,private toast:NgToastService ){}

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

    
      let meterNo = this.route.snapshot.params['meterNo'];
      let month = this.route.snapshot.params['month'];
      
      this.userservice. getBillDetailsForReceipt(meterNo,month).subscribe(data => {
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


      });
    
}
adminprofile: Adminprofile = new Adminprofile(); 
customer: Customer = new Customer();
generatebill: GenerateBill = new GenerateBill();
payments: Payment = new Payment();
receipts: Receipts = new Receipts();

}
