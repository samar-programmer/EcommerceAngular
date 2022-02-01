import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='localhost:10002/shopper/api/product/get-products';
  
  constructor(private httpClient:HttpClient ) { }
  
  getProductList(){
    console.log("inside service");
    return this.httpClient.get(this.baseUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    console.log(error);
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //console.log(errorMessage);
    return throwError(errorMessage);
 }
}
