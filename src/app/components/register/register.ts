import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterServ } from '../../services/register-serv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup
  
  constructor(private fb: FormBuilder, private regServ: RegisterServ, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      salary: ['', Validators.required],
    })
  }
  
  registerEmp(data: any) {
    this.regServ.createEmp(data).subscribe((res)=> {
      if (res) {
        alert("Employee Registered Successfully");
        this.router.navigate(['/employees']);
      }
    })
  }
}