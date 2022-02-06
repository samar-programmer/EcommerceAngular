import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceUser } from '../ecommerce-user';

import { RegisterService } from '../register.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  
  user=new EcommerceUser();

  constructor(private _service:RegisterService,private route:Router) { }

  ngOnInit(): void {
    
    var email=localStorage.getItem("email")
 
    if(email==null){
     console.log("No Email");
  
    this.route.navigate(['./home']);
      }
  }


  registerUser()
  {
      var result=this._service.registerUserFromRemote(this.user,this.user.email);
                 result.subscribe((data:any)=>console.log(data));
  }

logOut()
{
  localStorage.clear();
    this.route.navigate(['./login']);
}

}
