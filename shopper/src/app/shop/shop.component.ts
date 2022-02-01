import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }
  listProducts(){
    console.log("service calling")
    this.productService.getProductList().subscribe(
      data=>{
       // console.log(data);
        this.products=data;
        
    }
      )
  }

}
