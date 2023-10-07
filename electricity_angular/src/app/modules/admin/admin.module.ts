import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { ShowcustomerComponent } from './components/showcustomer/showcustomer.component';
import { BillgenerateComponent } from './components/billgenerate/billgenerate.component';
import { ShowbillComponent } from './components/showbill/showbill.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElectricityService } from './electricity.service';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { CollectbillComponent } from './components/collectbill/collectbill.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NgToastModule } from 'ng-angular-popup';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ShowpaymentdetailsComponent } from './components/showpaymentdetails/showpaymentdetails.component';
import { DefaultdashboardComponent } from './components/defaultdashboard/defaultdashboard.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { SearchreceiptComponent } from './components/searchreceipt/searchreceipt.component'
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';



@NgModule({
  declarations: [
    DashbordComponent,
    NewcustomerComponent,
    ShowcustomerComponent,
    BillgenerateComponent,
    ShowbillComponent,
    UpdatecustomerComponent,
    PaymentdetailsComponent,
    CollectbillComponent,
    LoginComponent,
    RegistrationComponent,
    AdminprofileComponent,
    ShowpaymentdetailsComponent,
    DefaultdashboardComponent,
    ReceiptComponent,
    SearchreceiptComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule
  ],
  providers:[
    ElectricityService,
  ]
})
export class AdminModule { }
