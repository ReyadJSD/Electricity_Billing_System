import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DefaulthomeComponent } from './components/defaulthome/defaulthome.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ElectricityService } from './electricity.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { CustomersignupComponent } from './components/customersignup/customersignup.component';
import { ContuctusComponent } from './components/contuctus/contuctus.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgToastModule } from 'ng-angular-popup';
import { NewconnectionComponent } from './components/newconnection/newconnection.component';


@NgModule({
  declarations: [
    DefaulthomeComponent,
    AboutusComponent,
    CustomerloginComponent,
    CustomersignupComponent,
    ContuctusComponent,
    HomepageComponent,
    NewconnectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
   FormsModule,
    NgToastModule,
    ReactiveFormsModule,
  ],
  providers:[
    ElectricityService
  ]
})
export class HomeModule { }
