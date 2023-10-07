import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ElectricityService } from './electricity.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultdashboardComponent } from './components/defaultdashboard/defaultdashboard.component';
import { CutomerprofileComponent } from './components/cutomerprofile/cutomerprofile.component';
import { ConnectiondetailsComponent } from './components/connectiondetails/connectiondetails.component';
import { BilldetailsComponent } from './components/billdetails/billdetails.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { PaybillComponent } from './components/paybill/paybill.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ReceiptComponent } from './components/receipt/receipt.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DefaultdashboardComponent,
    CutomerprofileComponent,
    ConnectiondetailsComponent,
    BilldetailsComponent,
    PaymentdetailsComponent,
    PaybillComponent,
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [
    ElectricityService,
  ]
})
export class CustomerModule { }
