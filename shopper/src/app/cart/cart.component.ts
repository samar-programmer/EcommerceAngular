import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Payment } from '../common/payment';
import { PaymentServiceService } from '../services/payment-service.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';

declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails :any;

 totalproducts : any = 0;
  constructor(private cartService :CartService,private paymetService:PaymentServiceService) { }

  ngOnInit(): void {

    let result : any = this.cartService.getAllProducts();

    result
    .subscribe({
      next:(response:any)=>{
       console.log(response);
       this.cartDetails = response;
       console.log(this.cartDetails);
       this.totalproducts = this.cartDetails.length;
      },
      error:()=>{
        alert("error");
      }
    })

  }

increaseItemCount(item:any) {
    item.productQuantity++;
    item.quantityprice=item.productQuantity*item.productDiscountPrice;
  };
 decreaseItemCount = function(item:any) {
   if(item.productQuantity>0){
    item.productQuantity--;
    item.quantityprice=item.productQuantity*item.productDiscountPrice;
  
   }
 
  };

  
  paymentMessage:any;
  PaymentInfo: Payment=new Payment();
  error:any;
  options = {
    "key": "rzp_test_eKMQiTe1MYTomX",
    "amount": "", 
    "name": "Shopper",
    "description": "Payment",
    "order_id":"",
    "handler": function (_response: any){
        console.log(_response.razorpay_payment_id);
        console.log(_response.razorpay_order_id);
        console.log(_response.razorpay_signature);
        Swal.fire("Good Job","Payment successful","success");
        
    }
    ,
    "prefill": {
    "name": "aa",
    "email": "aa@gmail.com",
    "contact": "9850593605"
    },
    "notes": {
    "address": "coding try"
    },
    "theme": {
    "color": "#3399cc"
    }
    };


  checkResponse(){
   console.log(this.paymentMessage);

   if(this.paymentMessage.orederStatus=="created"){
    this.options.order_id =this.paymentMessage.orderId;
    this.options.amount = this.paymentMessage.orederAmount; //paise
    
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
               
    rzp1.on('payment.failed',  (response:any ) =>{    
        // Todo - store this information in the server
        console.log(response.error.code);    
        console.log(response.error.description);    
        console.log(response.error.source);    
        console.log(response.error.step);    
        console.log(response.error.reason);    
        console.log(response.error.metadata.order_id);    
        console.log(response.error.metadata.payment_id);
        this.error = response.error.reason;
        Swal.fire("Failed!!","OOps Payment failed !!","error");
    }
    );
   }
  }
  startPayment(){
    this.PaymentInfo.setAmount(50);
    this.paymetService.makePaymentService(this.PaymentInfo).subscribe((response: any)=>
    {
      this.paymentMessage=response
      this.checkResponse();
    });
  
  }



  // $scope.sumCalc = function() {
  //   var sum = 0;
  //   angular.forEach($scope.itemList, function(item, index) {
  //     sum += parseInt(item.quantity,10);
  //   });
  //   return sum;
  // };

}
