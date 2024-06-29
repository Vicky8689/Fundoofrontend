import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  

  constructor(private httpService:HttpService) {
    
   }

   private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: "Bearer " + localStorage.getItem('token') || '',
  });

   addNote(data:any){
    // return this.httpService.postServiceNote('/AddNotes',data,this.headers);
    return  this.httpService.postServiceNote('/AddNotes',data,true,{headers:this.headers});
    
   }
   
   getNote(){
    // return this.httpService.postServiceNote('/AddNotes',data,this.headers);
    return  this.httpService.getServiceNote('/GetAllNotes',true,{headers:this.headers});
    
   }

}
