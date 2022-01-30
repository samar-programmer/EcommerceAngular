import { Injectable } from '@angular/core';
import { EcommerceUser } from './ecommerce-user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:10001/signIn";

  constructor(private _http : HttpClient) { }


   loginUserFromRemote(user:EcommerceUser)
  {
  
    return  this._http.post(this.baseUrl,user,{responseType:'text' as 'json'});
  }
}
