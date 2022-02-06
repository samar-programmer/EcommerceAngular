import { EcommerceUser } from "./ecommerce-user";

export class EcommerceAddress {

    
    
	 doorno?:number;
	 name?:String;
	 streetname?:String;
	 city?:String;
	 state?:String;
	 pincode?:number;
	 landmark?:String;
	 phonenumber?:number;
     userdata?:EcommerceUser

	 public setUserdata(userdata:EcommerceUser){
        this.userdata=userdata;
    }
    public getUserdata(){
        return this.userdata;
    }

     
}
