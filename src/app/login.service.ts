import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from './model/loginUser';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private isLoggedIn = new BehaviorSubject<boolean>(false);
  //currLoggedIn = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) { }

  
   validateUser(user:LoginUser,tokenStr1:String):Observable<Boolean>
  {

    let tokenStr='Bearer '+tokenStr1;
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    //console.log("before Sudoku hit");//let tokenStr=String(this.http.post<String>("http://localhost:8081/authenticate",loginUserAuth,{responseType:'text' as 'json'}))
   console.log("returned from authenticate:::"+tokenStr)
   console.log("headers::::"+headers.get("Authorization"))
    console.log("before Sudoku hit");
    return this.http.post<Boolean>("http://localhost:8081/loginuser",user,{headers})
  }

  /*changeIsLoggedInToTrue()
  {
    this.isLoggedIn.next(true);
  }

  changeIsLoggedInToFalse(){
    this.isLoggedIn.next(false);
  }*/

}
