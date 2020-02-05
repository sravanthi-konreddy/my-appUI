import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyAuthService } from '../my-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: MyAuthService, private router: Router) { }

  
  ngOnInit() {
    this._authService.logout();
    this.router.navigate(['login']);
  }

}
