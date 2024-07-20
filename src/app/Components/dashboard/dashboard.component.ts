import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DisplayNoteComponent } from '../displayNote/display-note.component';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataservice/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DataServiceService]
})
export class DashboardComponent {
  show=true
  logout=false;
  showNotecondition="note";

 constructor(private router: Router,private dataservice:DataServiceService){ 
  
 }
 myGridViewValue=true;
 logoutShow(){
  this.logout=true;
  
 }
 onLogOut(){
  localStorage.setItem('token','')
  this.router.navigate(['']);
 }

 myGridView(){

  this.myGridViewValue=!this.myGridViewValue;
  this.dataservice.raisDataEmiterEvent(this.myGridViewValue);
  // console.log(this.myGridViewValue)
 }
  goArchive(){
    this.router.navigate(['dashboard/archive']);
  }
  goNote(){
    this.router.navigate(['dashboard/notes']);
  }
  goTrash(){
    this.router.navigate(['dashboard/trash']);

  }
  
  myNoteFundashboard(){
    console.log("hello i am function in dash board");
    this.show=!this.show;
    this.showNotecondition="note";

 
  }

}
