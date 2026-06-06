import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServ } from '../../../services/register-serv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-emp',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-emp.html',
  styleUrl: './update-emp.css',
})

export class UpdateEmp implements OnInit{
  editForm: FormGroup;
  empObj : any = {};

  constructor(private fb: FormBuilder, private regServ: RegisterServ, private router: Router) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      salary: ['', [Validators.required, Validators.min(1)]],
    })
    this.empObj = this.regServ.empObj;
    sessionStorage.setItem('empObj', JSON.stringify(this.empObj));
  }

  ngOnInit() {
    this.empObj = !(this.empObj) ? sessionStorage.getItem(JSON.parse('empObj')) : this.empObj;
    this.editForm.patchValue({
      name: this.empObj.name,
      email: this.empObj.email,
      mobile: this.empObj.mobile,
      salary: this.empObj.salary
    });
  }
  
  updateEmployee(emp:any) {
    let empdata = {
      name: emp.name,
      email: emp.email,
      mobile: emp.mobile,
      salary: emp.salary
    }
    this.regServ.updateEmp(empdata, this.empObj._id).subscribe((res: any)=> {
      if(res && res.message) {
         this.regServ.getAllEmployees().subscribe((data)=> {
          if (data) {
            sessionStorage.setItem('empList', JSON.stringify(data));
            alert(res.message)
            this.router.navigate(['/employees'])
          }
        })
      }
    })
  }
}
