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

import { FormsModule } from '@angular/forms';
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
import { DisplayNoteComponent } from './Components/displayNote/display-note.component';
import { DisplayArchiveComponent } from './Components/display-archive/display-archive.component';
import { NoteComponent } from './Components/note/note.component';
import { DisplayTrashComponent } from './Components/display-trash/display-trash.component';

@NgModule({
  declarations: [
    AppComponent,
   
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    NoteOneComponent,
    NoteTwoComponent,
    NoteTwoBottomComponent,
    DisplayNoteComponent,
    DisplayArchiveComponent,
    NoteComponent,
    DisplayTrashComponent,
  ],
  imports: [
    FormsModule,
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
