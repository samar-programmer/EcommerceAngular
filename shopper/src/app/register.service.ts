import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EcommerceUser } from './customer/ecommerce-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl="http://localhost:10001/shopper/api/customer/editProfile";

  constructor(private _http:HttpClient) { }

  registerUserFromRemote(user:EcommerceUser,email:any)
  {
     return this._http.put((this.baseUrl/email),user,{responseType :'text' as 'json'});
  }

}
