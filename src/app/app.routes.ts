import { Routes } from '@angular/router';

import {LoginComponent} from "./pages/login/login.component";
import { RegisterComponent} from "./pages/register/register.component";
import {MainComponent} from "./pages/main/main.component";

const routeConfig: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login page'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register page'
  },
  {
    path: 'main',
    component: MainComponent,
    title: 'Main page'
  },
];

export default routeConfig;
export const routes: Routes = [];
