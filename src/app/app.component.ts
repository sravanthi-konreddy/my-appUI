import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,private welcomeServi: WelcomeService) {}

  
  title = 'ang-prac';
}
