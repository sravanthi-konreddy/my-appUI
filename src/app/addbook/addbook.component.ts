import { Component, OnInit } from '@angular/core';
import { AddbookService } from '../addbook.service';
import { BookDetails }from '../model/bookDetails';
import { FormGroup, FormControl } from '@angular/forms';
import {BookDetailsToUpload} from '../model/bookDetailsToUpload';
import { Router, ActivatedRoute } from '@angular/router';
import { SudokuService } from '../sudoku.service';
import { LoginUserAuth } from '../model/loginUserAuth';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  user: any;
  password:any;
  loginUserAuth:LoginUserAuth;
  tokenStr:String;
addBook = new FormGroup({
  bookTitle: new FormControl(''),
  bookAuthor: new FormControl(''),
  coverPage: new FormControl('')
});

fileToUpload1:BookDetailsToUpload;
  gotResponse: boolean=false;
  fileToUpload: File = null;
  files: BookDetails[];
  uploadBook:BookDetails;
  constructor(private route: ActivatedRoute,
    private router: Router,private fileUploadService:AddbookService,private sudoServ:SudokuService) {
    this.user=this.route.snapshot.paramMap.get('username');
   this.password=this.route.snapshot.paramMap.get('password');
   this.loginUserAuth={username:'',password:''};
   this.loginUserAuth.username=this.user;
   this.loginUserAuth.password=this.password;
   }

  ngOnInit() {
  this.uploadBook={id:0,title:'',author:'',base64Image:''}
  this.fileToUpload1={author:'',title:'',coverPage:null}

  }
  handleFileInput(files: File) {
    this.fileToUpload = files[0];
    console.log("file::::::")
    console.log(this.fileToUpload)
    //this.uploadFileToActivity()
}

/*uploadFileToActivity() {
  this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    console.log("successfully inserted image..");
    console.log(data);
    }, error => {
      console.log(error);
    });
}*/

getFiles(token:String){
  console.log("in getfiles!!..")
  this.fileUploadService.getFiles(token).subscribe(data => {this.files=data;
    console.log(this.files);
    this.gotResponse=true;

  })
}

submitBook(){
  console.log("in submit book block...")
 
  console.log(this.addBook.value);
 
  this.fileToUpload1.author=this.addBook.value['bookAuthor']
  this.fileToUpload1.title=this.addBook.value['bookTitle']

 this.fileToUpload1.coverPage=this.fileToUpload
 
 this.sudoServ.authenticateUser(this.loginUserAuth)
   .subscribe(res=>{this.tokenStr=res;
    this.fileUploadService.postFile(this.tokenStr,this.fileToUpload1).subscribe(data => {
      console.log("successfully inserted image..");
      console.log(data);
      }, error => {
        console.log(error);
      });})

  


}

}
