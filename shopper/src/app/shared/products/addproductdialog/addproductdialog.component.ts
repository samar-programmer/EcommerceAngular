import { products } from './../products';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproductdialog',
  templateUrl: './addproductdialog.component.html',
  styleUrls: ['./addproductdialog.component.scss']
})
export class AddproductdialogComponent implements OnInit {

  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
    this.productForm =this.formBuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      imgsrc:['',Validators.required],
      date:['',Validators.required],
      productPrice:['',Validators.required],
      productDiscountPrice:['',Validators.required]

    });
  }

  addProduct(){
    console.log(this.productForm.value.productName);
   let productName = this.productForm.value.productName;
   let category = this.productForm.value.category;
   let imgsrc = this.productForm.value.imgsrc;
   let date = this.productForm.value.date;
   let productPrice = this.productForm.value.productPrice;
   let productDiscountPrice = this.productForm.value.productDiscountPrice;
   
   let product = new products(productName, category, imgsrc, date, productPrice, productDiscountPrice);
  this.productService.addProduct(product);
  };

}
