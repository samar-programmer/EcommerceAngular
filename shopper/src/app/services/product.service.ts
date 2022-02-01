import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl : string = 'http://localhost:10002/shopper/api/product/';
  
  constructor(private httpClient:HttpClient ) { }
  
  getProductList(){
    let result:any = this.httpClient.get( this.baseUrl+"get-products");
    return result;
  }

//   handleError(error: any) {
//     console.log(error);
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       // Get client-side error
      
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     //console.log(errorMessage);
//     return throwError(errorMessage);
//  }
}
