import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent  {
constructor(private noteService:NoteService) {
    
  }

@Input() condition:any;

allData:any[]=[];

ngOnInit(){
    this.getNoteMNC();
    
  }

 archivTrashLogo="";
iconStatus = true;


  check(item:any){
    if(this.condition=="note"){
      this.iconStatus = true;
      this.archivTrashLogo="archive"
      return !(item.isTrash || item.isArchive);
    }
    else if(this.condition=="archive"){
      this.iconStatus = true;
      this.archivTrashLogo="unarchive"
      return  item.isArchive;
    }
    else if(this.condition=="trash"){
      this.iconStatus = false;
      return item.isTrash
    }
    return null;
  }
  

  getNoteMNC(){
    
    this.noteService.getNote().subscribe(
      (response:any)=>{
        console.log('data get',response.data)
        this.allData=(response.data);
        this.allData.reverse();


      }

    );


  }

  

}
