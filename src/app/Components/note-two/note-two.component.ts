import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoteService } from 'src/app/services/note/note.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { DisplayNoteComponent } from '../displayNote/display-note.component';

@Component({
  selector: 'app-note-two',
  templateUrl: './note-two.component.html',
  styleUrls: ['./note-two.component.css']
})
export class NoteTwoComponent {
  submitted =false
  noteAddForm:FormGroup=new FormGroup(
    {
      noteTitle: new FormControl(''),
      noteDesc: new FormControl(''),
      noteColor:new FormControl(''),
      
    }
  )

  constructor(
    private _formBuilder: FormBuilder,private dashboardComponent:DashboardComponent ,private noteService:NoteService 
  ){

  }

  ngOninit(){
    this.noteAddForm=this._formBuilder.group(
      {
        noteTitle: ['',[Validators.required]],
        noteDesc: ['',[Validators.required]],       
        noteColor: ['']      
      }
     
    );
    // console.log("note add form")
  }

  closeNote(){  //note was add in this method
    console.log(this.noteAddForm)
    
    const {noteTitle,noteDesc,noteColor}=this.noteAddForm.value;
    this.dashboardComponent.myNoteFundashboard();
    if(this.noteAddForm.valid){
      let data = {title:noteTitle,description:noteDesc,color:noteColor}
      this.noteService.addNote(data).subscribe(
        
        (response:any)=>{
          console.log('note added succes:',response)
        },
        (error)=>{
          console.error('note note add ', error);

        }
      )
      
    }
    
    
  }
}
