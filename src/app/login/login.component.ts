import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginUser } from '../model/loginUser';
import { LoginService } from '../login.service';
import { LoginUserAuth } from '../model/loginUserAuth';
import { SudokuService } from '../sudoku.service';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenStr:String;
  loginUserAuth:LoginUserAuth
  loginUser: LoginUser;
  isValid:Boolean;
  errorMsg:string=null;
  user:any;
  password:any;

  loginForm=new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    area:new FormControl('')
  })

  constructor(private router: Router,private loginServ:LoginService,private sudoServ:SudokuService,private route: ActivatedRoute) { 
    //Start watching for user inactivity.
    
   this.loginUserAuth={username:'',password:''};
   
   this.tokenStr='';
    
  }

  ngOnInit() {
    
  }
  onSubmit(){
    this.loginUser={'username':'',name:'',password:'',cpassword:''};
    
    
      this.loginUserAuth.username=this.loginForm.value['username'];
      this.loginUserAuth.password=this.loginForm.value['password'];
       console.log(this.loginForm.value['username']);
       this.sudoServ.authenticateUser(this.loginUserAuth)
      .subscribe(res=>{this.tokenStr=res;
        console.log("tokenStr::"+this.tokenStr);
        
    this.loginUser.username=this.loginForm.value['username'];
    this.loginUser.password=this.loginForm.value['password'];

    this.loginServ.validateUser(this.loginUser,this.tokenStr)
    .subscribe(res=>{this.isValid=res;
      if(this.isValid)
      {
        if(this.loginForm.value['area']=='book')
        {
          this.router.navigate(['/welcome',this.loginForm.value["username"],this.loginForm.value["password"]],{skipLocationChange: true,replaceUrl:false});
        }
        else if(this.loginForm.value['area']=='play')
        {
          console.log('in play console')
          console.log(this.loginForm.value["username"])
          console.log(this.loginForm.value["password"])
          this.router.navigate(['/sudoku',this.loginForm.value["username"],this.loginForm.value["password"]],{skipLocationChange: true,replaceUrl:false})
        }
        
      }
      else{
        this.errorMsg="Invalid Username or Password";
      }});
      })
    
   
       console.log("LoginUserAuth:::"+this.loginUserAuth.username);
      
 
    


    
   

  }
  

  

}
