import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterServ } from '../../services/register-serv';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup
  
  constructor(private fb: FormBuilder, private regServ: RegisterServ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      salary: ['', Validators.required],
    })
  }
  
  registerEmp(data: any) {
    console.log(data)
    this.regServ.createEmp(data).subscribe((res)=> {
      console.log(res)
    })
    // this.regServ.getAllEmployees().subscribe((res)=> {
    //   console.log(res)
    // })
  }
}