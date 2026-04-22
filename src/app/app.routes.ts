import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { EmployeeData } from './components/employee-data/employee-data';

export const routes: Routes = [
    {path:'register', component: Register },
    {path: 'login', component: Login},
    {path: 'employees', component: EmployeeData},
    {path:'', redirectTo:'appComponent', pathMatch: 'full'},
];
