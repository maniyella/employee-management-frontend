import { Component, ViewChild, ElementRef } from '@angular/core';
import { RegisterServ } from '../../services/register-serv';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-data',
  imports: [CommonModule],
  templateUrl: './employee-data.html',
  styleUrl: './employee-data.css',
})
export class EmployeeData {
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  empList: any = {};
  deleteId: any = '';

  constructor(private regServ: RegisterServ, private router: Router) {}
   ngOnInit() {
     this.regServ.getAllEmployees().subscribe((res)=> {
      this.empList = res;
    })
    this.deleteId = '';
  }

  updateEmployee(emp:any) {
    this.regServ.empObj = emp;
    this.router.navigate(['/update'])
  }

  deleteEmp() {
    if (this.deleteId) {
      this.regServ.deleteEmpData(this.deleteId).subscribe((res: any)=> {
        if (res && res.message) {
          this.deleteId = '';
          this.closeBtn.nativeElement.click();
          alert(res.message);
        }
        this.regServ.getAllEmployees().subscribe((res)=> {
          this.empList = res;
        })
      })
    }
  }

  close(event: any) {
    event.target.blur(); //
    this.deleteId = '';
  }

}
