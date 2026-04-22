import { Component } from '@angular/core';
import { RegisterServ } from '../../services/register-serv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-data',
  imports: [CommonModule],
  templateUrl: './employee-data.html',
  styleUrl: './employee-data.css',
})
export class EmployeeData {
  empList: any = []

  constructor(private regServ: RegisterServ) {}
   ngOnInit() {
     this.regServ.getAllEmployees().subscribe((res)=> {
      this.empList = res;
    })
  }

}
