import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-my-note',
  templateUrl: './my-note.component.html',
  styleUrls: ['./my-note.component.css']
})
export class MyNoteComponent  {
  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: "Bearer " + localStorage.getItem('token') || '',
  });
  constructor(private noteService:NoteService) {
    
  }
 allData:any[]=[];

  ngOnInit(){
    this.getNoteMNC();
  }
  getNoteMNC(){
    
    this.noteService.getNote().subscribe(
      (response:any)=>{
        console.log('data get',response.data)
        this.allData=response.data
      }

    );


  }
  user=["fdd",'dhdd','dthfgff'];



}
