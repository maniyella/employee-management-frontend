import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'register', loadComponent:()=>import('./components/employees/register/register').then(m=>m.Register)},
    {path: 'employees', loadComponent: ()=> import('./components/employees/employee-comp/employee-comp').then(m=>m.EmployeeComp)},
    {path: 'update', loadComponent:()=>import('./components/employees/update-emp/update-emp').then(m=>m.UpdateEmp)},
    {path: 'login', loadComponent:()=>import('./components/employees/login/login').then(m=>m.Login)},
    {path:'', redirectTo:'login', pathMatch: 'full'},
];
