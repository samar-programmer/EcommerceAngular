import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EcommerceUser } from '../ecommerce-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl="http://localhost:10001/register";

  constructor(private _http:HttpClient) { }

  registerUserFromRemote(user:EcommerceUser)
  {
     return this._http.post(this.baseUrl,user,{responseType :'text' as 'json'});
  }

}
