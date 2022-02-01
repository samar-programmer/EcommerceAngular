import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='localhost:10002/shopper/api/product/get-products'
  constructor(private httpClient:HttpClient ) { }
  
  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}
