import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './model/loginUser';
import { Observable } from 'rxjs';
import { RegisterResponse } from './model/registerResponse';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user:LoginUser):Observable<RegisterResponse>
  {
    return this.http.post<RegisterResponse>("http://localhost:8080/demoapi/api/registerUser",user)
    
  }

}
