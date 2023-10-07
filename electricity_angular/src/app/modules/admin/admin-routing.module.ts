import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { ShowcustomerComponent } from './components/showcustomer/showcustomer.component';
import { BillgenerateComponent } from './components/billgenerate/billgenerate.component';
import { ShowbillComponent } from './components/showbill/showbill.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { CollectbillComponent } from './components/collectbill/collectbill.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ShowpaymentdetailsComponent } from './components/showpaymentdetails/showpaymentdetails.component';
import { DefaultdashboardComponent } from './components/defaultdashboard/defaultdashboard.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { SearchreceiptComponent } from './components/searchreceipt/searchreceipt.component';


const routes: Routes = [
  {
    path: '', component: DashbordComponent,
    children: [
      { path: '', component: DefaultdashboardComponent },
      { path: 'defaultdashboard', component: DefaultdashboardComponent },
      { path: 'newcustomer', component: NewcustomerComponent },
      { path: 'showcustomer', component: ShowcustomerComponent },
      { path: 'billgenerate', component: BillgenerateComponent },
      { path: 'showbill', component: ShowbillComponent },
      { path: 'updatecustomer/:meterNo', component: UpdatecustomerComponent },
      { path: 'paymentdetails', component: PaymentdetailsComponent },
      { path: 'showpaymentdetails', component: ShowpaymentdetailsComponent },
      { path: 'collectbill', component: CollectbillComponent },
      { path: 'adminprofile', component: AdminprofileComponent },
      { path: 'receipt/:meterNo/:month', component: ReceiptComponent },
      { path: 'searchreceipt', component: SearchreceiptComponent }

    ]
  },
  { path: 'login', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
