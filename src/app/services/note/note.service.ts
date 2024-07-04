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

   archiveNote(data:any){
    return  this.httpService.postServiceNote('/ArchiveNote?noteId='+data,{},true,{headers:this.headers});
   }
   unArchiveNote(data:any){
     return  this.httpService.postServiceNote('/UnArchiveNote?noteId='+data,{},true,{headers:this.headers});
   }

   trashNote(data:any){
    return  this.httpService.postServiceNote('/trashNote?noteId='+data,{},true,{headers:this.headers});
   }
   unTrashNote(data:any){
    return  this.httpService.postServiceNote('/unTrashNote?noteId='+data,{},true,{headers:this.headers});
   }

   deleteNote(data:any){
    
     return this.httpService.deleteServiceNote('/DeleteNote?noteId='+data,true,{headers:this.headers});
   }
   updateNoteColor(noteid:any,color:any){
   console.log(color+"inupdate")
   console.log('/UpdateColorNote?noteId='+noteid+'&color='+color)
     return this.httpService.putServiceNote('/UpdateColorNote?noteId='+noteid+'&color='+ encodeURIComponent(color),true,{headers:this.headers});
   }

}
