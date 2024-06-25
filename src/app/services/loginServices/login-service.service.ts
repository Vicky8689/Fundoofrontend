import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  // private headers = new HttpHeaders({
  //   Accept: 'application/json',
  //   Authorization: localStorage.getItem('token') || '',
  // });
  constructor(private http: HttpClient) { }
  login(data :any): Observable<any>
  {
  console.log('i am in login servei');
    
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: localStorage.getItem('token') || '',
    });

    // console.log(this.http.post<any>('https://localhost:5001/fundoonotes/login',data,{headers}))
    return this.http.post<any>('https://localhost:5001/fundoonotes/login',data,{headers});
  }
 
}
