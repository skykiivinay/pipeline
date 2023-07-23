import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
loginForm!:FormGroup;
isSubmitted = false;
constructor(private formBuilder : FormBuilder){
  this.loginForm= this.formBuilder.group({
    email:['',Validators.required, Validators.email],
    password:['',Validators.required]
  });
}

get fc(){
  return this.loginForm.controls;
}

submit(){
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }

  alert(`${this.fc.email.value},${this.fc.password.value}`);
}


ngOnInit(): void {
  
}


}
