import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NoteOneComponent } from './Components/note-one/note-one.component';
import { NoteTwoComponent } from './Components/note-two/note-two.component';
import {MatCardModule} from '@angular/material/card';
import { NoteTwoBottomComponent } from './Components/note-two-bottom/note-two-bottom.component';
import {MatDividerModule} from '@angular/material/divider';
import { MyNoteComponent } from './Components/my-note/my-note.component';

@NgModule({
  declarations: [
    AppComponent,
   
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    NoteOneComponent,
    NoteTwoComponent,
    NoteTwoBottomComponent,
    MyNoteComponent,
  ],
  imports: [
    
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
