import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails :any;

 totalproducts : any = 0;
  constructor(private cartService :CartService) { }

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
  // $scope.sumCalc = function() {
  //   var sum = 0;
  //   angular.forEach($scope.itemList, function(item, index) {
  //     sum += parseInt(item.quantity,10);
  //   });
  //   return sum;
  // };

}
