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


import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
  user: any;
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

  reviewForm=new FormGroup({
    
    ctrl :new FormControl(null, Validators.required),
  review1:new FormControl(null)

  })

  
  
 
  

  

  constructor(private route: ActivatedRoute,
    private router: Router,private userIdle: UserIdleService,private _authService: MyAuthService, 
    private welcomeServi: WelcomeService,private modalService: NgbModal,private reviewBookServc:ReviewBookService
   ) {this.user=this.route.snapshot.paramMap.get('id');
   console.log(this.user);
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

    
    this.welcomeServi.getData()
    .subscribe(data1=>this.data=data1);

    
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
    this.reviewBook={username:'',id:0,rating:0,review:''}
    console.log("user id::"+this.user)
    console.log('book id::'+this.bookID);
    console.log('rating::'+val.ctrl)
    console.log("insubmit!!!!")
    this.successId=this.bookID;
    this.reviewBook={username:this.user,id:this.bookID,rating:val.ctrl,review:val.review1};
    this.reviewBookServc.reviewBook(this.reviewBook)
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
  }

}
