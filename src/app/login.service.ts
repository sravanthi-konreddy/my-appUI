import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './model/loginUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  
   validateUser(user:LoginUser):Observable<Boolean>
  {
    return this.http.post<Boolean>("http://localhost:8080/demoapi/api/user",user)
  }

}
