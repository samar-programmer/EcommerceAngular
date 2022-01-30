
import { Component, OnInit } from '@angular/core';
import { EcommerceUser } from '../ecommerce-user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    user=new EcommerceUser();

  constructor() { }

  ngOnInit(): void {
  }

  

}
