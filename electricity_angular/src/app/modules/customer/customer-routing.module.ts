import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultdashboardComponent } from './components/defaultdashboard/defaultdashboard.component';
import { CutomerprofileComponent } from './components/cutomerprofile/cutomerprofile.component';
import { BilldetailsComponent } from './components/billdetails/billdetails.component';
import { ConnectiondetailsComponent } from './components/connectiondetails/connectiondetails.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { PaybillComponent } from './components/paybill/paybill.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: DefaultdashboardComponent },
      { path: 'defaultdashboard', component: DefaultdashboardComponent },
      { path: 'cutomerprofile', component: CutomerprofileComponent },
      { path: 'billdetails', component: BilldetailsComponent },
      { path: 'connectiondetails', component: ConnectiondetailsComponent },
      { path: 'paymentdetails', component: PaymentdetailsComponent },
      { path: 'paybill', component: PaybillComponent },
      { path: 'receipt', component: ReceiptComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
