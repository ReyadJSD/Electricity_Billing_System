import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaulthomeComponent } from './components/defaulthome/defaulthome.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CustomersignupComponent } from './components/customersignup/customersignup.component';
import { NewconnectionComponent } from './components/newconnection/newconnection.component';

const routes: Routes = [
  {
    path: '', component: DefaulthomeComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'customerlogin', component: CustomerloginComponent },
      { path: 'customersignup', component: CustomersignupComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'newconnection', component: NewconnectionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
