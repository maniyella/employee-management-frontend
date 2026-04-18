import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'register', component: Register },
    {path: 'login', component: Login},
    {path:'', redirectTo:'appComponent', pathMatch: 'full'},
];
