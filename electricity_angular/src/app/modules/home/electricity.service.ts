import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from './classes/signup';
import { Customersignin } from './classes/customersignin';
import { Applyconnection } from './classes/applyconnection';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {

  private url = 'http://localhost:8080/';
  constructor(private client: HttpClient) { }
  ngOnInit(){
    this.url = 'http://localhost:8080/allcus';
  }
  insertUser(electricity:Signup){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"insertCustomer",electricity);
  }
  customerLoginCheck(user: Customersignin): Observable<Customersignin> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Customersignin>(`${this.url}cstmlogin`, user);
  }
  insertCustomer(applyconnection:Applyconnection){
    this.url = 'http://localhost:8080/';
    return this.client.post(this.url+"savecstm",applyconnection);
  }
  
}
