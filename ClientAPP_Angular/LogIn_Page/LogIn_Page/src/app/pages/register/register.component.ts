import { Component } from '@angular/core';
import { RegisterServiceService } from '../../service/register-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  alert:boolean=false;
  registerUserForm: FormGroup;
  

  constructor(private registerService:RegisterServiceService, private fb: FormBuilder){}

  ngOnInit(){
    this.registerUserForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailAddress: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }
  registerUser(){
    console.log(this.registerUserForm.value);
    this.registerService.registerUser(this.registerUserForm.value).subscribe((res)=>{
      console.log(res);
      this.alert=true;
      this.registerUserForm.reset({});
    })
 
  }
  closeAlert(){
    this.alert=false;
  }
}
 