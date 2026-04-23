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
    return this.http.post(`${this.apiurl}/employees`, data);
  }

  getAllEmployees() {
    return this.http.get(`${this.apiurl}/employees`);
  }

}
