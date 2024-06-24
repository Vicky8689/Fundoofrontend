import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform = new FormGroup({
    userName:new FormControl(''),
    password:new FormControl('')

  })
  loginuser(){
    console.warn(this.loginform.value);
  }
}
