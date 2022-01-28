import { Injectable } from '@angular/core';
import { EcommerceUser } from './ecommerce-user';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:10001/signIn";

  constructor(private _http : HttpClient) { }


  async loginUserFromRemote(user:EcommerceUser)
  {
    console.log(user);
    return await this._http.post<any>(this.baseUrl,user);
  }
}
