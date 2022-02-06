import { Component, OnInit } from '@angular/core';
import { EcommerceAddress } from '../ecommerce-address';
import { EcommerceUser } from '../ecommerce-user';

import { SaveAddressService } from '../save-address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  // user1:EcommerceUser=new EcommerceUser();
  // address=new EcommerceAddress();
  // 
  // address.setUserdata(user1);

  public user1:EcommerceUser;
  public address:EcommerceAddress=new EcommerceAddress();
 
  
  constructor(private _service:SaveAddressService) { 
    this.user1=new EcommerceUser();
    //this.address=new EcommerceAddress();
    this.user1.email=localStorage.getItem("email");
    this.address.userdata=this.user1;
  }
  

  ngOnInit(): void {
  }

  saveAddress()
  {
      var result=this._service.saveAddressFromRemote(this.address);
      result.subscribe((data:any)=>console.log(data));
  }

}
