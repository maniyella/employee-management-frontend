import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterServ } from '../../services/register-serv';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  registerForm: FormGroup
  
  constructor(private fb: FormBuilder, private regServ: RegisterServ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      salary: ['', Validators.required],
    })
  }
  
  ngOnInit() {
     this.regServ.getAllEmployees().subscribe((res)=> {
    })
  }
  
  registerEmp(data: any) {
    this.regServ.createEmp(data).subscribe((res)=> {
      if (res) {
        alert("Employee Registered Successfully");
      }
    })
  }
}