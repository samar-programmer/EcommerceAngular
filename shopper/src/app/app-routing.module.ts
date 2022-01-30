import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { SignUpComponent } from './customer/sign-up/sign-up.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent ,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'signUp',component:SignUpComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
