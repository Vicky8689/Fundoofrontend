import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/loginServices/login-service.service';
import { UserService } from 'src/app/services/user/user.service';

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
  onLoginClick(){
    console.log('Button clicked');
  }
  goToRegistration(){
    this.route.navigateByUrl('/signup');
  }
  data:any;
  constructor(
    private _formBuilder: FormBuilder,private loginService:LoginServiceService ,private route:Router
    ) {
     
     }

  
loginuser(){
  console.log('i am in login component');
  if(this.loginform.valid){
    const {userName,password} = this.loginform.value
    let data = {email:userName,password:password }
   this.loginService.login(data).subscribe(
    response=>{
      console.log('Login successful',response);
      localStorage.setItem('token', response.message);
      this.route.navigateByUrl('/dashboard');
     },
    error=>{
      console.error('Login failed', error);
      }
  
  

 )
}else{
  console.error('login form Invalid');
}
}
//Addet initiation
// ngOninit(){
//   this.loginform=this._formBuilder.group(
//     {
//       userName: ['',[Validators.required,Validators.email]],
//       password: ['',[Validators.required ]],  
//     }
//   );
// }


  // loginuser(){
  //   console.log(this.loginform);
  //   const {userName,password} = this.loginform.value
  //   if(this.loginform.valid){
  //     let data = {userName:userName,password:password }
  //     this.userService.login(data).subscribe(
  //       (response:any)=>{
  //         console.log('login successful:',response.data);
  //       },
  //       (error) => {
          
  //         console.error('login failed:', error);
        
  //       }
  //     )
  //   }
    // 
  // }
}
