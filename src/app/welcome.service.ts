import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Book} from './model/book';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  data:Book[];

  constructor(private http: HttpClient) { }

   getData(){
    console.log("IN SERVICE....");
    return this.http.get<Book[]>("http://localhost:8080/demoapi/api/book")
    //.subscribe(data1=>this.data=data1)  
    //.pipe(console.log("after"))
  }
}
