import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './Components/displayNote/display-note.component';
import { AuthGuard } from './Components/guards/auth.guard';
import { DisplayArchiveComponent } from './Components/display-archive/display-archive.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'dashboard',component:DashboardComponent,
    canActivate:[AuthGuard],
        children:[
            {
                path: '', redirectTo: '/dashboard/notes', pathMatch:'full'
            },
          {
             path: 'notes',component:DisplayNoteComponent
          },
          {
            path:'archive',component:DisplayArchiveComponent
          }

        ]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
