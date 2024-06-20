import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'signup';

  signupform=new FormGroup({
    firstName :new FormControl(''),
    lastName :new FormControl(''),
    userName :new FormControl(''),
    pass :new FormControl(''),
    confPass :new FormControl('')
  })
  signupuser(){
    console.warn(this.signupform.value);
  }


  // constructor(){
  //   setTimeout(() => {
  //     this.title="change title";
  //   }, 2000);
  // }

}
