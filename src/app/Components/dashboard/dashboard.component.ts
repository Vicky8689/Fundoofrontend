import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DisplayNoteComponent } from '../displayNote/display-note.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  show=true

  myNoteFundashboard(){
    console.log("hello i am function in dash board");
    this.show=!this.show;
    
    
  }

}
