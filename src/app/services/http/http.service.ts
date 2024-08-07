import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {// HttpService class was created
  private baseUrlUser ='https://localhost:5001/fundoonotes';
  private baseUrlNote ='https://localhost:5001/api/Notes';

  // private headers = new HttpHeaders({
  //   Accept: 'application/json',
  //   Authorization: "Bearer "+localStorage.getItem('token') || '',
    
  // });
 // inject the http client
  constructor(private http:HttpClient) { 
    
  }
  // create function
  postService(url:string,data:any,token:boolean=false,httpOtions:any={}){
    
    return this.http.post(this.baseUrlUser+url,data,token && httpOtions)
  }
  postServiceNote(url:string,data:any,token:boolean=false,httpOtions:any={}){
    // console.log(this.http.post(this.baseUrlNote+url,data,true && httpOtions))

    return this.http.post(this.baseUrlNote+url,data,true && httpOtions);
  }
  getServiceNote(url:string,token:boolean=false,httpOtions:any={}){

    return this.http.get(this.baseUrlNote+url,token && httpOtions);
  }
  deleteServiceNote(url:string,token:boolean=false,httpOtions:any={}){

    return this.http.delete(this.baseUrlNote+url,token && httpOtions);
  }
  putServiceNote(url:string,token:boolean=true,httpOtions:any={}){

    return this.http.put(this.baseUrlNote+url,{},token && httpOtions);
  }


//  private url ='https://localhost:5001/'
}
