import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl : string = 'http://localhost:10002/shopper/api/cart/';
  constructor(private httpClient:HttpClient) { }

  getAllProducts(){
    let result:any = this.httpClient.get( this.baseUrl+"get-cart");
    return result;
  }

}
