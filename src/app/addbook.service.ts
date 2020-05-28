import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BookDetails} from './model/bookDetails'
import { FormGroup, FormControl } from '@angular/forms';
import {BookDetailsToUpload} from './model/bookDetailsToUpload'
@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  constructor(private http: HttpClient) { }
  /*postFile(fileToUpload: File): Observable<Object> {
    const endpoint = 'http://localhost:8081/addFile';
    let formData = new FormData();
    let tokenStr='Bearer '+'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU4NzQ0NjA4MywiaWF0IjoxNTg3NDEwMDgzfQ.txSjrpTKecbhNCRT31a-kPELwn5AWXkY0sZS0Uf4-v4';
    const headers=new HttpHeaders().set("Authorization",tokenStr);
    //fileToUpload.name='file'
    
    formData.append('file', fileToUpload,fileToUpload.name);
     formData.forEach((v,k) => {
       console.log(v);
       console.log(k);
     })
  
    

    return this.http.post(endpoint, formData,{headers});
      
}*/

postFile(token:String,fileToUpload:BookDetailsToUpload): Observable<Object> {
  const endpoint = 'http://localhost:8081/addFile';
  let formData = new FormData();
  let tokenStr='Bearer '+token;
  const headers=new HttpHeaders().set("Authorization",tokenStr);
  //fileToUpload.name='file'
  let name='file'

 //let fileToUpload:BookDetailsToUpload;
 //fileToUpload={}
 /*.author=bookDetails.value['bookAuthor']
 fileToUpload.title=bookDetails.value['bookTitle']
 fileToUpload.coverPage=bookDetails.value['coverPage']*/

 console.log('file to upload:::')
 console.log(fileToUpload);
  
  
 /* formData.append('file', fileToUpload,fileToUpload.name);
   formData.forEach((v,k) => {
     console.log(v);
     console.log(k);
   })*/
  
  formData.append('coverPage',fileToUpload.coverPage)
  formData.append('bookTitle',fileToUpload.title)
  formData.append('bookAuthor',fileToUpload.author)
  console.log("...............................")

  console.log(fileToUpload.coverPage.type)
  console.log(fileToUpload.coverPage.name)
  console.log(fileToUpload.coverPage.size)


  console.log(".............................")
console.log(formData)
  formData.forEach((v,k) => {
    console.log(v);
    console.log(k);
  })

  //return this.http.post(endpoint, formData,{headers});
  console.log("BEFORE HITTING URL...")
  return this.http.post(endpoint, formData,{headers});
    
}

getFiles(token:String){
  let tokenStr='Bearer '+token
  console.log("token str::"+tokenStr)
  console.log("token::"+token)
    const headers=new HttpHeaders().set("Authorization",tokenStr)
  return this.http.get<BookDetails[]>("http://localhost:8081/getFiles",{headers})
}
}
