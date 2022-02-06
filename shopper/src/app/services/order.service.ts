import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl : string = 'http://localhost:10001/shopper/api/order/';
  constructor(private httpClient:HttpClient ) { }

  getAllProducts(){
    let result:any = this.httpClient.get( this.baseUrl+"get-allOrder");
    return result;
  }
}
