import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products:any;
  currentProductId:any;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(()=>{
      this.listProducts()
    });
  }


  listProducts(){
    const hasId:boolean=this.route.snapshot.paramMap.has('id');
    if(hasId){
      this.currentProductId= this.route.snapshot.paramMap.get('id');
      console.log(this.currentProductId);
    }else{
        console.log("noval");
    }
    this.productService.getProductList()
    .subscribe((response: any)=>this.products=response )
  }

}
