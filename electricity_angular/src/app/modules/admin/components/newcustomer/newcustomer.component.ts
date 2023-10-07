import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../classes/customer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent {
  name:any;
  gender:any;
  meterNo:any;
  meterType:any;
  issueDate:any;
  district:any;
  address:any;
  email:any;
  phone:any;
  customer:any
  
  constructor(private userservice:ElectricityService, private router:Router, private route:ActivatedRoute, private formBuilder: FormBuilder, private toast:NgToastService){
    
  }
  userId: any;
  
  signout() {
    localStorage.removeItem("userId");
    this.router.navigate(["home"]);
  }
  newCustomerPage(){
    this.router.navigate(["newcustomer"]);
  }
  generateBillPage(){
    this.router.navigate(["billgenerate"]);
  }
  showCustomerPage(){
    this.router.navigate(["showcustomer"]);
  }
  showBillDetailsPage(){
    this.router.navigate(["showbill"]);
  }


  saveCustomer(){
    this.customer=new Customer(this.name,this.gender,this.meterNo,this.meterType,this.issueDate,this.district,this.address,this.email,this.phone);
    this.userservice.insertCustomer(this.customer)
    .subscribe(data => {
      if(data != null) {
        this.toast.success({detail:"SUCCESS",summary:'Save Successfully',duration:3000, position:'topCenter'});
      } else {
        this.toast.error({detail:"ERROR",summary:'Faild To Save',duration:3000, position:'topCenter'});
      }
    })
  }
  
  showPage(){
    this.router.navigate(["showcustomer"]);
  }
   adminPage(){
    this.router.navigate(["admin"]);
  }


  // location Change

  locationForm: FormGroup = this.formBuilder.group({
    division: [''],
    district: [''],
    subdistrict: ['']
  });

  divisions = ['Dhaka', 'Barishal', 'Khulna']; // Replace with your actual division data
  districts: { [key: string]: string[] } = {
    'Dhaka': ['Dhaka', 'Faridpur', 'Gazipur','Gopalganj','Narayanganj','Gazipur','Manikganj'],
    'Barishal': ['Barishal', 'Jhalokati', 'Pirojpur', 'Patuakhali', 'Barguna', 'Bhola'],
    'Khulna': ['Khulna', 'Bagerhat', 'Jessore']
  }; // Replace with your actual district data
  subdistricts: { [key: string]: string[] } = {
    'District A': ['Subdistrict X', 'Subdistrict Y', 'Subdistrict Z'],
    'Barishal': ['Barishal Sadar', 'Babugonj', 'Bakerganj', 'Muladi', 'Hijla', 'Gournadi', 'Agoiljhora', 'Banaripara','Mehendiganj'],
    'District C': ['Subdistrict P', 'Subdistrict Q', 'Subdistrict R'],
    // Add more subdistrict data here for other districts
  };

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      division: [''],
      district: [''],
      subdistrict: ['']
    });

    this.onDivisionChange(); // Trigger the first update of district dropdown
    this.onDistrictChange(); // Trigger the first update of subdistrict dropdown
  }

  onDivisionChange(): void {
    const selectedDivision = this.locationForm.get('division')?.value;
    if (selectedDivision) {
      this.locationForm.get('district')?.setValue(''); // Reset the district selection
      this.locationForm.get('subdistrict')?.setValue(''); // Reset the subdistrict selection
    }
  }

  onDistrictChange(): void {
    const selectedDistrict = this.locationForm.get('district')?.value;
    if (selectedDistrict) {
      this.locationForm.get('subdistrict')?.setValue(''); // Reset the subdistrict selection
    }
  }
}
