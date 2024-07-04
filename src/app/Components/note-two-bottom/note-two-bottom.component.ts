import { Component, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-note-two-bottom',
  templateUrl: './note-two-bottom.component.html',
  styleUrls: ['./note-two-bottom.component.css']
})
export class NoteTwoBottomComponent {

 @Input() hideIcon:any;
 @Input() changelogoarchive:any;
 @Input() _iconStatus:any;
 @Input() itemId:any;
 constructor(private noteService:NoteService){

 }
 ngOnInit(){
 
console.log(this.hideIcon);
 }
 trashNoteNTBC(){
  console.log(this.itemId);
  this.noteService.trashNote(this.itemId).subscribe();
 }
 unTrashNoteNTBC(){
  console.log(this.itemId);
  this.noteService.unTrashNote(this.itemId).subscribe();
 }
 unArchiveNoteNTBC(){
  this.noteService.unArchiveNote(this.itemId).subscribe();
 }
 archiveNoteNTBC(){
  console.log(this.itemId);
 
  this.noteService.archiveNote(this.itemId).subscribe(
    (response:any) => {
      console.log('Archive successful:', response.data);
    },
    (error) => {
      console.error('Archive failed:', error);
    }
  );


 }
 deleteNoteNTBC(){
  this.noteService.deleteNote(this.itemId).subscribe();
 }
 colorcode: string = '#000000';
 edit=false;

 updatecolor(){
   this.colorcode=this.colorcode
  
   console.log(this.colorcode)

   
 }
 colorPop(){
  this.edit=!this.edit;
  this.colorcode=this.colorcode;
  console.log(this.colorcode)
  this.noteService.updateNoteColor(this.itemId,this.colorcode).subscribe();
  
 }

}
