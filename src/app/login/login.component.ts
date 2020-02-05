import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../model/loginUser';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: LoginUser;
  isValid:Boolean;
  errorMsg:string=null;

  loginForm=new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router,private loginServ:LoginService) { 
    //Start watching for user inactivity.
    
  }

  ngOnInit() {
    
  }
  onSubmit(){
    this.loginUser={'username':'',name:'',password:'',cpassword:''};
    console.log(this.loginForm.value['username']);
    
    this.loginUser.username=this.loginForm.value['username'];
    this.loginUser.password=this.loginForm.value['password'];

    this.loginServ.validateUser(this.loginUser)
    .subscribe(res=>{this.isValid=res;
      if(this.isValid)
      {
        this.router.navigate(['/welcome',this.loginForm.value["username"]]);
      }
      else{
        this.errorMsg="Invalid Username or Password";
      }});


    
   

  }
  

  

}
