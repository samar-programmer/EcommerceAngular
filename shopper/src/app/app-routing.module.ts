import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent ,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
