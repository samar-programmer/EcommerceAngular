import { Component, OnInit } from '@angular/core';
import { EcommerceUser } from '../ecommerce-user';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user=new EcommerceUser();

  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
  }


  registerUser()
  {
      var result=this._service.registerUserFromRemote(this.user);
                 result.subscribe(data=>console.log(data));
  }

}
