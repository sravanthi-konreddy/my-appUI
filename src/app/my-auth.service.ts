import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {
  isUserLoggedin: boolean;

  constructor() {
   
   }
   logout() {
    this.isUserLoggedin = false;
  }
  
}
