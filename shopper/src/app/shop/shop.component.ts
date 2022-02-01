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
    this.productService.getProductList()
    .subscribe((response: any)=>this.products=response )
  }

}
