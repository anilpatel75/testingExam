import { MyAuthService } from './my-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {


  constructor( private  ser:MyAuthService) { }
  canActivate()
  {
    console.log("helo")
   if(this.ser.isLogin())
   {
     return false;
   }
   else{
     alert("you are not allow to use this service")
     return true;
   }
  }

}
