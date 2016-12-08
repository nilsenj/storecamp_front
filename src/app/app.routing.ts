import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { SignupComponent } from "./signup/signup.component";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
