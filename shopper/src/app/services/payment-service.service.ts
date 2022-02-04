import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../common/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  baseUrl : string = 'http://localhost:10002/shopper/';
  
  constructor(private httpClient:HttpClient ) { }
  
  makePaymentService(PaymentInfo:Payment){
    console.log(PaymentInfo.getAmount());
    return  this.httpClient.post(this.baseUrl+"api/payment/makePayment/",PaymentInfo,{responseType:'text' as 'json'});
  }
}
