import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { EcommerceUser } from '../ecommerce-user';

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
    
    console.log(this.user);

    var result=this._service.loginUserFromRemote(this.user).then(data=>console.log(data));

        //result.then(data=>console.log(data.toString()));

  }
}
