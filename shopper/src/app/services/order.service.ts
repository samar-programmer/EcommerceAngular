import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl : string = 'http://localhost:10002/shopper/api/order/';
  constructor(private httpClient:HttpClient ) { }

  getAllProducts(){
    let result:any = this.httpClient.get( this.baseUrl+"get-allOrder");
    return result;
  }

  setOrder(orderDetails:any ){
    return this.httpClient.post(this.baseUrl+"setOrder", orderDetails, {responseType:'text' as 'json'});
  }
}
