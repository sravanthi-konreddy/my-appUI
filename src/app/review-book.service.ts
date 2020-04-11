import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReviewBook } from './model/reviewBook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewBookService {

  constructor(private http: HttpClient) { }

  reviewBook(reviewBook:ReviewBook, tokenStr1:String):Observable<boolean>
  {
    let tokenStr='Bearer '+tokenStr1;
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    console.log("FROM REVIEW BOOK SERVICE")
    return this.http.post<boolean>("http://localhost:8081/reviewBook",reviewBook,{headers})
    
  }
}
