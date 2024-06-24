import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {// HttpService class was created
  private baseUrlUser ='https://localhost:5001/fundoonotes'
  // private headers = new HttpHeaders({
  //   Accept: 'application/json',
  //   Authorization: localStorage.getItem('token') || '',
  // });
 // inject the http client
  constructor(private http:HttpClient) { 
    
  }
  // create function
  postService(url:string,data:any,token:boolean=false,httpOtions:any={}){
    return this.http.post(this.baseUrlUser+url,data,token && httpOtions)
  }

//  private url ='https://localhost:5001/'
}
