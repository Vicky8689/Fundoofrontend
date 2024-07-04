import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-note-one',
  templateUrl: './note-one.component.html',
  styleUrls: ['./note-one.component.css']
})
export class NoteOneComponent {

  constructor(private dashboardComponent:DashboardComponent){

  }

  myNoteFun(){
    console.log("hello i am function");
    this.dashboardComponent.myNoteFundashboard();
  }
}
