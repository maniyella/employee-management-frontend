import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { RegisterServ } from '../../../services/register-serv';

@Component({
  selector: 'app-employee-comp',
  imports: [CommonModule, NgxSpinnerModule],
  templateUrl: './employee-comp.html',
  styleUrl: './employee-comp.css',
})

export class EmployeeComp {
 @ViewChild('closeBtn') closeBtn!: ElementRef;
  empList: any = [];
  deleteId: any = '';
 
  constructor(private regServ: RegisterServ, private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    const data = sessionStorage.getItem('empList');
    if ((data && (!this.empList || this.empList.length === 0))) {
      this.empList = JSON.parse(data);
    } else {
        this.spinner.show();
        this.regServ.getAllEmployees().subscribe((res)=> {
          if (res) {
            this.empList = res;
            sessionStorage.setItem('empList', JSON.stringify(res));
            this.spinner.hide();
          }
        })
    }
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
          sessionStorage.setItem('empList', JSON.stringify(res));
        })
      })
    }
  }
 
  close(event: any) {
    (document.activeElement as HTMLElement)?.blur();
    this.deleteId = '';
  }
 
  addEmployee() {
    this.router.navigate(['/register']);
  }
 
  download() {
    this.regServ.getAllEmployees().subscribe((response: any) => {
      const updatedData = response.map((item:any) => {const { _id, ...rest } = item;
        return rest;
      });
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(updatedData);
      // Create workbook
      const workbook: XLSX.WorkBook = {
        Sheets: { data: worksheet },
        SheetNames: ['data']
      };
    // Generate Excel buffer
      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blob = new Blob([excelBuffer], {
        type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      // Save File
      saveAs(blob, 'employees.xlsx');
    });
  }
}
