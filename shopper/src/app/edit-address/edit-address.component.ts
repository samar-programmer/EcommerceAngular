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

  user1:EcommerceUser=new EcommerceUser("email","","","",0);
  address=new EcommerceAddress();
  //user1.setEmail("email");
  //address.setUserdata(user1);
  constructor(private _service:SaveAddressService) { }

  ngOnInit(): void {
  }

  saveAddress()
  {
    var result=this._service.saveAddressFromRemote(this.address);
      result.subscribe((data:any)=>console.log(data));

  }

}
