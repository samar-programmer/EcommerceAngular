import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../common/payment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  baseUrl : string = 'http://localhost:10002/shopper/';
  
  constructor(private httpClient:HttpClient ) { }
  
  // makePaymentService(PaymentInfo:Payment){
  //   console.log(PaymentInfo.getAmount());
  //   return  this.httpClient.post(this.baseUrl+"api/payment/makePayment/",PaymentInfo,{responseType:'text' as 'json'});
  // }

  makePaymentService(PaymentInfo:Payment): Observable<any> {
    return this.httpClient.post(this.baseUrl+"api/payment/makePayment/", PaymentInfo, this.httpOptions);
}
  
}
