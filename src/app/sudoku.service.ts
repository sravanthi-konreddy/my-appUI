import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sudo } from './model/sudoku';
import { LoginUserAuth } from './model/loginUserAuth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor(private http: HttpClient) { }

  solveSudoku(sudo:Sudo,tokenStr1:String)
  {
    let tokenStr='Bearer '+tokenStr1;
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    //console.log("before Sudoku hit");//let tokenStr=String(this.http.post<String>("http://localhost:8081/authenticate",loginUserAuth,{responseType:'text' as 'json'}))
   console.log("returned from authenticate:::"+tokenStr)
   console.log("headers::::"+headers.get("Authorization"))
    console.log("before Sudoku hit");

    return this.http.post<Sudo>("http://localhost:8081/solveSudoku",sudo,{headers})
  }
 
  authenticateUser(user:LoginUserAuth):Observable<String>
  {
    console.log("in authenticate"+user.username);
    console.log("in authenticate"+user.password)
    return this.http.post<String>("http://localhost:8081/authenticate",user,{responseType:'text' as 'json'})
    
  }

}
