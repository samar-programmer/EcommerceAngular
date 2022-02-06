import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceUser } from '../ecommerce-user';
import { RequestOtpService } from '../request-otp.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user=new EcommerceUser();

  constructor(private _service:RequestOtpService,private route:Router) { }

  ngOnInit(): void {
  }

  requestOtp()
  {
    var result=this._service.requestOtpFromRemote(this.user);

      result.subscribe((data:any)=>console.log(data));

      this.route.navigate(['./recovery-password']);
  }

}
