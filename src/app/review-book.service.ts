import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewBook } from './model/reviewBook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewBookService {

  constructor(private http: HttpClient) { }

  reviewBook(reviewBook:ReviewBook):Observable<boolean>
  {
    return this.http.post<boolean>("http://localhost:8080/demoapi/api/reviewBook",reviewBook)
    
  }
}
