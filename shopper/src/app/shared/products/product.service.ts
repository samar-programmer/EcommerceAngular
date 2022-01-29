import { products } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  addProduct (product:products){
    let result:any = this.httpClient.post( "http://localhost:10001/shopper/api/product/add-product",product);
    result.subscribe((data:any) =>console.log(data.toString()));
    
  }
}
