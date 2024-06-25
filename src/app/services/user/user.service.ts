import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: localStorage.getItem('token') || '',
  });
  constructor(private httpService:HttpService) { }
  registration(data:any){
    
    return this.httpService.postService('/Registration',data,false,{headers:this.headers});
  }
 

}
