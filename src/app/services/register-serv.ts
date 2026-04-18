import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterServ {
  constructor(private http: HttpClient) {}
  apiurl = environment.apiUrl;

  createEmp(data:Observable<any>) {
    console.log(data)
    console.log(`${this.apiurl}/addemployee`);
    return this.http.post(`${this.apiurl}/addemployee`, data);
  }

  getAllEmployees() {
    console.log(`${this.apiurl}/getemployees`);
    return this.http.get(`${this.apiurl}/getemployees`);
  }
}
