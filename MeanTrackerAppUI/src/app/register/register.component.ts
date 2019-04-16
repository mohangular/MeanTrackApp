
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './../service.service';
import User from '../models/user';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    projectName: new FormControl('', Validators.required),
    projectRole: new FormControl('', Validators.required),
    managerName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required)
});
  constructor(private http: HttpClientModule, private fb: FormBuilder, private service: ServiceService, private user: User) { }
  ngOnInit() {
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get mid() {
    return this.registerForm.get('mid');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get projectName() {
    return this.registerForm.get('projectName');
  }
  get projectRole() {
    return this.registerForm.get('projectRole');
  }
  get managerName() {
    return this.registerForm.get('managerName');
  }
  get location() {
    return this.registerForm.get('projectRole');
  }
  onSave(registerForm) {
    this.form = registerForm.value;
    console.log('ts', this.form);
    this.service.addUser(registerForm).subscribe(res => {
      console.log('res', res);
  });
}
  /*addUser(user) {
    console.log('am user', user);
    this.service.addUser(user).subscribe(res => {
      console.log('res', res);
    });
  }*/
}
