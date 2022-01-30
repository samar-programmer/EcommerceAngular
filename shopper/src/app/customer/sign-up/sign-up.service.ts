import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl="http://localhost:10001/signUp";

  constructor(private _http:HttpClient) { }

 



}
