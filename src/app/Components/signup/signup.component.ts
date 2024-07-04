import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MustMatch } from './must-match.validator';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'signup';
  // signupForm !: FormGroup;
  submitted =false;


  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    pass: new FormControl(''),
    confPass: new FormControl(''),
    
  });

  constructor(
    private _formBuilder: FormBuilder,private userService:UserService, private router:Router
    ) { }
    ngOninit(){
      this.signupForm=this._formBuilder.group(
        {
          firstName: ['',[Validators.required, Validators.pattern(/^[A-Z]{1}[a-z]{2,}$/)]],
          lastName: ['',[Validators.required, Validators.pattern(/^[A-Z]{1}[a-z]{2,}$/)]],
          userName: ['',[Validators.required,Validators.email]],
          pass: ['',[Validators.required]],
          confPass: ['',[Validators.required]], 

                  
        },
        
       
      );
      
    }

    
    
  signupuser(){
   
    console.log(this.signupForm);
    const {firstName,lastName,userName,pass,confPass} = this.signupForm.value
    if(this.signupForm.valid && pass==confPass){
      let data = {firstName:firstName,lastName:lastName,email:userName,password:pass}
      this.userService.registration(data).subscribe(
        (response:any) => {
         
          console.log('Registration successful:', response.data);
          this.router.navigate(['']);
         
        },
        (error) => {
          
          console.error('Registration failed:', error);
        
        }
      );

    }
    else{

      console.log('Form Not Valid');
    }
  }
  // constructor(){
  //   setTimeout(() => {
  //     this.title="change title";
  //   }, 2000);
  // }

}
