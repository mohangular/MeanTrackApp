
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
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
  registerForm: FormGroup;
  constructor(private http: HttpClientModule, private fb: FormBuilder, private service: ServiceService, private user: User) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      mid: ['', Validators.required ],
      password: ['', Validators.required ],
      projectName: ['', Validators.required ],
      projectRole: ['', Validators.required ],
      managerName: ['', Validators.required ],
      location: ['', Validators.required ]
    });
  }

  get firstName() {
    return this.registerForm.get('userName');
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
  addUser(user) {
    console.log('am user', user);
    this.service.addUser(user).subscribe(res => {
      console.log('res', res);
    });
  }

}
