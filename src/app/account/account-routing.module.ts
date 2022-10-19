import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [],
    children: [
    //   {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //     data: {returnUrl: window.location.pathname}
    //   },
    //   {
    //     path: 'reset-password',
    //     component: ResetPasswordComponent
    //   },
    //   {
    //     path: 'forgot-password',
    //     component: ForgotPasswordComponent
    //   },      
    //   { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
