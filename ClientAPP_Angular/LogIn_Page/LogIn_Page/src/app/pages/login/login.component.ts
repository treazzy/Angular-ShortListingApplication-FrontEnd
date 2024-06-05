import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginUserForm: FormGroup;

  alert:boolean=false;
  registerUserForm: FormGroup;

  constructor(private loginService:LoginService, private fb: FormBuilder){}

  ngOnInit(){
    this.loginUserForm = this.fb.group({
      emailAddress: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }
  logInUser(){
    console.log(this.loginUserForm.value);
    this.loginService.logInUser(this.loginUserForm.value).subscribe((res)=>{
      console.log(res);
      this.alert=true;
      this.loginUserForm.reset({});
    })
 
  }
  closeAlert(){
    this.alert=false;
  }

}
