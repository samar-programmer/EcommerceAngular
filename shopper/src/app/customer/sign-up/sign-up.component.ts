
import { Component, OnInit } from '@angular/core';
import { EcommerceUser } from '../ecommerce-user';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    user=new EcommerceUser();

  constructor(private _service:SignUpService) { }

  ngOnInit(): void {
  }

  signUpUser()
  {
    var result=this._service.signUpUserFromRemote(this.user);

                result.subscribe(data=>console.log(data));
  }

}
