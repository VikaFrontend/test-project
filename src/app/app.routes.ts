import { Routes } from '@angular/router';

import {LoginComponent} from "./pages/login/login.component";


const routeConfig: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page'
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(mod => mod.RegisterComponent),
    title: 'Register page'
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.component').then(mod => mod.MainComponent),
    title: 'Main page'
  },
  {
    path: '**',
    component: LoginComponent,
    title: 'Login page'
  },
];

export default routeConfig;
export const routes: Routes = [];
