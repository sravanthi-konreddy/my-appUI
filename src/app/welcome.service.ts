import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Book} from './model/book';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  data:Book[];

  constructor(private http: HttpClient) { }

   getData(tokenStr1:String){
    let tokenStr='Bearer '+tokenStr1;
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    console.log("IN SERVICE....");
    console.log("JWT::"+tokenStr1)
    return this.http.get<Book[]>("http://localhost:8081/book",{headers})
    //.subscribe(data1=>this.data=data1)  
    //.pipe(console.log("after"))
  }

  solveSudoku()
  {
    console.log("before Sudoku hit");
    return this.http.get<string>("http://localhost:8080/demoapi/api/solveSudoku")
  }


}
