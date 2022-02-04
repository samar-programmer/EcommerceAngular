import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {

  products:any;
  singleProduct:any;
  currentProductId:any;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.listProducts(+params['id']) 
    });
  }


  listProducts(id:number){
    
    if(id==0){
      this.currentProductId= 1;
    }else{
        this.currentProductId=id;
    }

    this.productService.getSingleProduct(this.currentProductId)
    .subscribe((response: any)=>this.singleProduct=response )
  }

}
