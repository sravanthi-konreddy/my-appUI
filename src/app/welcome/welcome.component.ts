import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { MyAuthService } from '../my-auth.service';
import{ReviewBookService} from '../review-book.service';
import{WelcomeService}from '../welcome.service';
import{Book} from './../model/book';
import{ReviewBook} from './../model/reviewBook';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
//import {}from '../../'
import { filter, map, } from 'rxjs/operators';
import { pipe, range, timer, zip } from 'rxjs';
import { SudokuService } from '../sudoku.service';
import { LoginUser } from '../model/loginUser';
import { AddbookService } from '../addbook.service';
import { BookDetails }from '../model/bookDetails';


import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginUserAuth } from '../model/loginUserAuth';

/*export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}*/

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  files: BookDetails[];
  gotResponse: boolean=false;
 
  user: any;
  password:any;
  data:Book[];
  popupVisisble:boolean=false;
  currentRate:number=0;
  bookID:number;
  reviewBook: ReviewBook;

  success:boolean;
  errMsg:string;
  successMsg:string;
  successId:number;
  booktitle:string;

  tokenStr:String;
  loginUserAuth:LoginUserAuth;

  reviewForm=new FormGroup({
    
    ctrl :new FormControl(null, Validators.required),
  review1:new FormControl(null)

  })

  
  
 
  

  

  constructor(private route: ActivatedRoute,
    private router: Router,private userIdle: UserIdleService,private _authService: MyAuthService, 
    private welcomeServi: WelcomeService,private modalService: NgbModal,private reviewBookServc:ReviewBookService
    ,private sudoServ:SudokuService,
    private fileUploadService:AddbookService
   ) {this.user=this.route.snapshot.paramMap.get('username');
   this.password=this.route.snapshot.paramMap.get('password');
   console.log(this.user);
   console.log("password::::"+this.password)
   this.loginUserAuth={username:'',password:''};
   this.loginUserAuth.username=this.user;
   this.loginUserAuth.password=this.password;
  }

  ngOnInit() {
    this.successMsg=null;
    this.errMsg=null;
    this.success=false;
    this.successId=0;
    this.booktitle=null;

    //this.welcomeServi.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(()=>{this.router.navigate(['logout']);console.log('time up');});

    this.sudoServ.authenticateUser(this.loginUserAuth)
   .subscribe(res=>{this.tokenStr=res;console.log("tokenStr::"+this.tokenStr);
   //this.welcomeServi.getData(this.tokenStr)
    //.subscribe(data1=>this.data=data1);
    this.getFiles(this.tokenStr);
    
  });

    
   

    
  }

  navigateToAddBook(){
    //this.sudoServ.authenticateUser(this.loginUserAuth)
    //.subscribe(res=>{})
    console.log("in navigate to add book method::::")
    console.log("username::"+this.loginUserAuth.username)
    console.log("password:::"+this.loginUserAuth.password)
    this.router.navigate(['/addBook',this.loginUserAuth.username,this.loginUserAuth.password],{skipLocationChange: true,replaceUrl:false});
  }


  solveSudoku()
  {
    console.log("************************");
    this.welcomeServi.solveSudoku()
    .subscribe(res=>console.log(res));
  }

  review(input:number,title:string)
  {
    this.popupVisisble=true;
    console.log("in review::")
    console.log(input);
    this.bookID=input;
    this.booktitle=title;
    
    
  }
  close()
  {
    this.popupVisisble=false
  }

  onSubmit(val)
  {
    console.log(this.user);
    console.log(this.password);
    this.reviewBook={username:'',id:0,rating:0,review:''}
    console.log("user id::"+this.user)
    console.log('book id::'+this.bookID);
    console.log('rating::'+val.ctrl)
    console.log("insubmit!!!!")
    this.successId=this.bookID;
    this.reviewBook={username:this.user,id:this.bookID,rating:val.ctrl,review:val.review1};
    this.sudoServ.authenticateUser(this.loginUserAuth)
   .subscribe(res=>{this.tokenStr=res;console.log("tokenStr::"+this.tokenStr);
   this.reviewBookServc.reviewBook(this.reviewBook, this.tokenStr)
    .subscribe(res=>{
      if(res==true)
      {
        this.popupVisisble=false
        this.success=true;
        
          this.successMsg="Review Submitted"
          //this.successMsg+=" for "
          this.reviewBook={username:'',id:0,rating:0,review:''}
          this.reviewForm.value['ctrl']=0;
          this.reviewForm.value['review1']=null;
      }
      else
      {
        this.popupVisisble=false
        this.success=false;
          this.successMsg="Review Submit Failed"
          this.reviewBook={username:'',id:0,rating:0,review:''}
      }
    })
  });
    
  }

  getFiles(token:String){
    console.log("in getfiles!!..")
    this.fileUploadService.getFiles(token).subscribe(data => {this.files=data;
      console.log(this.files);
      this.gotResponse=true;
  
    })

}
}
