import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{LoginUser} from '../model/loginUser';
import { RegisterService } from '../register.service';
import{RegisterResponse} from '../model/registerResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginUser: LoginUser;
  success:boolean;
  errMsg:string;
  successMsg:string;
  registerResponse:RegisterResponse;


  registerForm=new FormGroup({
    name:new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl('')
  })

  constructor(private registerServ:RegisterService) { }

  ngOnInit() {
    this.successMsg=null;
    this.errMsg=null;
    this.success=false;
  }

  onSubmit(){
    this.loginUser={username:'',name:'',password:'',cpassword:''};
    if(this.registerForm.value['password']===this.registerForm.value['cpassword'])
    {
      this.loginUser={username:this.registerForm.value['username'],
      name:this.registerForm.value['name'],
      password:this.registerForm.value['password'],
    cpassword:this.registerForm.value['cpassword']};
      this.registerServ.registerUser(this.loginUser)
      .subscribe(res=>{
        if(res.responseCode==1)
        {
          this.success=true;
          this.successMsg=res.responseMessage
        }
        else
        {
          this.success=false
          this.errMsg=res.responseMessage
        }
      })
    }
    else{
      this.errMsg="passwords and confirmPassword does not match "
    }

    
  }

  resetForm()
  {
    this.registerForm.reset();

  }


}
