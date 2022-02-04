import { Component, OnInit } from '@angular/core';
import { EcommerceUser } from '../ecommerce-user';

import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user=new EcommerceUser();

  constructor(private _service:SignUpService) { }


  ngOnInit(): void {
  }

  signUpUser()
  {
    console.log("Heloo there");
    var result=this._service.signUpUserFromRemote(this.user);

                result.subscribe(data=>console.log(data));
  }

}
