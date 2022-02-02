import { Injectable } from '@angular/core';
import { EcommerceUser } from './ecommerce-user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:10001/signIn";
  private baseurl="http://localhost:10001/send-otp";

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
