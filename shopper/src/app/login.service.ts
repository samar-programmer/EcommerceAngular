import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EcommerceUser } from './ecommerce-user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:10001/shopper/api/customer/signIn";
  private baseurl="http://localhost:10001/shopper/api/customer/send-otp";

  constructor(private _http : HttpClient) { }


   loginUserFromRemote(user:EcommerceUser)
  {
  
    return  this._http.post(this.baseUrl,user,{responseType:'text' as 'json'});

  }

  sendOtp(user:EcommerceUser)
  {
    return this._http.post(this.baseurl,user,{responseType:'text' as 'json'});
  }

}
