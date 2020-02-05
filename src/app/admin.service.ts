import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  users: {[key: string]: string};
  constructor() {
    this.users={'sravanthi':'1234','asdf':'123'};
   }

  validatelogin()
  {
    if(this.users['sravanthi']!=null)
    {
      console.log("hello!!");
    }

  }
  checkUsername()
  {

  }
  checkConfirmPassword()
  {

  }

}
