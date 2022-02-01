import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products?:Product[] ;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listProducts();
    console.log("service calling")
  }
  listProducts(){
    this.productService.getProductList().subscribe(
      data=>this.products=data
      )
  }

}
