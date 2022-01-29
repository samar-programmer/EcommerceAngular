import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AddproductComponent } from './shared/products/addproduct/addproduct.component';


const routes: Routes = [
  {path:'',
   component:DefaultComponent,
   children:[{
      path:'',
      component:DashboardComponent
   },
  {path:'addProduct',
   component:AddproductComponent
   }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
