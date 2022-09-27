import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //profileForm: FormGroup;
  submitted = false;
  profileForm = this.fb.group({
    username : ['',Validators.required],
    password : ['']
  })
  constructor(private router: Router,private fb: FormBuilder) { 
    //this.myform()
  }

  ngOnInit(): void {
    
  }
  // myform(){
  //   this.profileForm = this.fb.group({
  //     email : []
  //   })
  // }
  get f(){
    return this.profileForm.controls;
  }
  submit(){
    this.router.navigate(['/home'])
  }
  onSubmit() {
    // this.submitted = true;
    // if(this.profileForm.invalid){
    //   return
    // }
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.router.navigate(['/home'])
  }
}
