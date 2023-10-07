import { Component, HostListener } from '@angular/core';
import { Adminprofile } from '../../classes/adminprofile';
import { Customer } from '../../classes/customer';
import { GenerateBill } from '../../classes/generate-bill';
import { Payment } from '../../classes/payment';
import { Receipts } from '../../classes/receipts';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-searchreceipt',
  templateUrl: './searchreceipt.component.html',
  styleUrls: ['./searchreceipt.component.css']
})
export class SearchreceiptComponent {
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

adminprofile: Adminprofile = new Adminprofile(); 
customer: Customer = new Customer();
generatebill: GenerateBill = new GenerateBill();
payments: Payment = new Payment();
receipts: Receipts = new Receipts();


searchAllDetailsForReceipt() {
  this.userservice.getBillDetailsForReceipt(this.receipts.meterNo,this.receipts.month).subscribe(
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

japerReport(){
  window.open(`http://localhost:8080/invoicePdf?meterNo=${this.receipts.meterNo}&month=${this.receipts.month}`,"_blank");
 }

// <!--pdf Generate here-->
generatePDF(action = 'open') {
  let docDefinition:any = {
    content: [
      {
        text: 'Electricity Billign System',
        fontSize: 16,
        alignment: 'center',
        color: '#047886'
      },
      {
        text: 'INVOICE',
        fontSize: 20,
        bold: true,
        alignment: 'center',
        decoration: 'underline',
        color: 'skyblue'
      },
      
      {
        text: 'Billed To',
        style: 'sectionHeader'
       
      },
      {
        columns: [
          [
            {
              text: `${(this.receipts.name)}`,
              bold:true
            },
            { text: `${(this.receipts.address)}, ${(this.receipts.district)}` },
            { text: `${(this.receipts.email)}` },
            { text: `${(this.receipts.phone)}` }
          ],
          [
            {
              text: `Date: ${new Date().toLocaleString()}`,
              alignment: 'right'
            },
            { 
              text: `Bill No : #DS0204${(this.receipts.billId)}`,
              alignment: 'right'
            }
          ]
        ]
      },
      
      {
        text: 'Order Details',
        style: 'sectionHeader'
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            ['Product', 'Price', 'Quantity', 'Amount'],
            // ...this.invoice.products.map(p => ([p.name, p.price, p.qty, (p.price*p.qty).toFixed(2)])),
            // [{text: 'Total Amount', colSpan: 3}, {}, {}, this.invoice.products.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2)]
          ]
        }
      },
      {
        text: 'Additional Details',
        style: 'sectionHeader'
      },
      {
          text: "additionalDetails",
          margin: [0, 0 ,0, 15]          
      },
      {
        columns: [
          [{ qr: `${"customerName"}`, fit: '50' }],
          [{ text: 'Signature', alignment: 'right', italics: true}],
        ]
      },
      {
        text: 'Terms and Conditions',
        style: 'sectionHeader'
      },
      {
          ul: [
            'Order can be return in max 10 days.',
            'Warrenty of the product will be subject to the manufacturer terms and conditions.',
            'This is system generated invoice.',
          ],
      }
    ],
    styles: {
      sectionHeader: {
        bold: true,
        decoration: 'underline',
        fontSize: 14,
        margin: [0, 15,0, 15]          
      }
    }
  };

  

  if(action==='download'){
    pdfMake.createPdf(docDefinition).download(this.receipts.billId);
  }else if(action === 'print'){
    pdfMake.createPdf(docDefinition).print();      
  }else{
    pdfMake.createPdf(docDefinition).open();      
  }

}




// generatePDF(action = 'open') {
//   let docDefinition: any = {
//     content: [
//       // ... (previous content definitions)
      
//       // Billed To section
//       {
//         table: {
//           widths: ['*'],
//           body: [
//             [
//               {
//                 text: 'Billed To:',
//                 style: 'sectionHeader'
//               },
//               {
//                 text: [
//                   { text: `Name: ${this.receipts.name}\n`, fontSize: 12 },
//                   { text: `Address: ${this.receipts.address}, ${this.receipts.district}\n`, fontSize: 12 },
//                   // ... Add other properties similarly
//                 ]
//               }
//             ]
//           ]
//         }
//       },
      
//       // Billed By section
//       {
//         table: {
//           widths: ['*'],
//           body: [
//             [
//               {
//                 text: 'Billed By:',
//                 style: 'sectionHeader'
//               },
//               {
//                 text: [
//                   { text: `User ID: ${this.adminprofile.userId}\n`, fontSize: 12 },
//                   { text: `Name: ${this.adminprofile.name}\n`, fontSize: 12 },
//                   // ... Add other properties similarly
//                 ]
//               }
//             ]
//           ]
//         }
//       },
      
//       // Bill Details section
//       {
//         table: {
//           widths: ['*'],
//           body: [
//             [
//               {
//                 text: 'Bill Details',
//                 style: 'sectionHeader'
//               },
//               {
//                 table: {
//                   widths: ['auto', 'auto'],
//                   body: [
//                     ['Meter Number', this.receipts.meterNo],
//                     ['Meter Type', this.receipts.meterType],
//                     // ... Add other rows similarly
//                   ]
//                 }
//               }
//             ]
//           ]
//         }
//       },
      
//       // ... (remaining content definitions)
//     ],
//     styles: {
//       sectionHeader: {
//         bold: true,
//         fontSize: 14,
//         margin: [0, 15, 0, 15]
//       }
//       // ... (other styles)
//     }
//   };

//   if (action === 'download') {
//     pdfMake.createPdf(docDefinition).download(this.receipts.billId);
//   } else if (action === 'print') {
//     pdfMake.createPdf(docDefinition).print();
//   } else {
//     pdfMake.createPdf(docDefinition).open();
//   }
// }
}
