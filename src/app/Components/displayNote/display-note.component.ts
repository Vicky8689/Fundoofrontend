import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataservice/data-service.service';
import { HttpService } from 'src/app/services/http/http.service';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent  {
constructor(private noteService:NoteService, private router: Router,private dataservice:DataServiceService) {  }

@Input() condition:any;
myGridViewValue:boolean=true;
allData:any[]=[];
    
myGride="row"
width="300px"
color='white'

ngOnInit(){
    this.getNoteMNC();
    
  }

 archivUnarchivLogo:boolean=false;
iconStatus = true;


  check(item:any){
    // console.log('data get',item.color)
   // this.color=item.color;
   
    if(this.myGridViewValue){
      this.width="300px";
      this.myGride="row";
      
    }
    else{
      
      this.myGride="column";
      this.width="450px";
    }
    if(this.condition=="note"){
      this.iconStatus = true;
      this.archivUnarchivLogo=true;
      return !(item.isTrash || item.isArchive);
    }
    else if(this.condition=="archive"){
      this.iconStatus = true;
      this.archivUnarchivLogo=false
// this.router.navigateByUrl('/archive')
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
        this.dataservice.dataEmitter.subscribe(
          (value)=>{
            this.myGridViewValue=value;
            // this.router.navigate(['dashboard/notes']);
           
          }
        );


      }

    );


  }

  

}
