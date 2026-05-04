import { Component, OnInit } from '@angular/core';
import { RegisterServ } from '../../services/register-serv';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  imports: [ReactiveFormsModule],
  templateUrl: './update-emp.html',
  styleUrl: './update-emp.css',
})
export class UpdateEmp implements OnInit {
  editForm: FormGroup;
  empObj : any = {};

  constructor(private fb: FormBuilder, private regServ: RegisterServ, private router: Router) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      salary: ['', Validators.required],
    })
    this.empObj = this.regServ.empObj;
  }

  ngOnInit() {
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
        alert(res.message)
        this.router.navigate(['/employees'])
      }
    })
  }

}
