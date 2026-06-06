import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServ } from '../../../services/register-serv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup
  
  constructor(private fb: FormBuilder, private regServ: RegisterServ, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      salary: ['', [Validators.required, Validators.min(1)]],
    })
  }
  
  registerEmp(data: any) {
    this.regServ.createEmp(data).subscribe((res)=> {
      if (res) {
        this.regServ.getAllEmployees().subscribe((res)=> {
          if (res) {
            sessionStorage.setItem('empList', JSON.stringify(res));
            alert("Employee Registered Successfully");
            this.router.navigate(['/employees']);
          }
        })
      }
    })
  }
}
