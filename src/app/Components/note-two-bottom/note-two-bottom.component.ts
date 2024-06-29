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
 constructor(){

 }
 ngOnInit(){
console.log(this.hideIcon);
 }

}
