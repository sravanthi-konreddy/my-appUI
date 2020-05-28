import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from './welcome.service';
import { LoginService } from './login.service';
//import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean=false;

  constructor(private router: Router,private welcomeServi: WelcomeService,private loginServ: LoginService) {
    //loginServ.currLoggedIn.subscribe(message => this.isLoggedIn=message);
  }

  
  
  title = 'ang-prac';
  
  
}
