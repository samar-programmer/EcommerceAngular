import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    AdminDashboardComponent
  ]
})
export class AdminModule { }
