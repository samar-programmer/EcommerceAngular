import { Component, OnInit } from '@angular/core';
import { EcommerceUser } from '../ecommerce-user';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new EcommerceUser();

  constructor(private _service:LoginService ) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    
    

    var result=this._service.loginUserFromRemote(this.user);

      result.subscribe((data:any)=>console.log(data));



  }

  forgotpassword()
  {
    var result=this._service.sendOtp(this.user);

        result.subscribe((data:any)=>console.log(data));

  }

  
  



}
