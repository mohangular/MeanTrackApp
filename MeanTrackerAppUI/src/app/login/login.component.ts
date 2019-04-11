import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private logingrp: FormBuilder, private auth: AuthenticationService, private router: Router) {
    this.createForm();
  }
  // onLogin(form: NgForm) {
  //   console.log(form.value.email);
  // }

  createForm() {
    this.loginform = this.logingrp.group({
      email: ['', Validators.required],
      password: ['', null]
    })
  }

  setUserCategoryValidators() {
    const email = this.loginform.get('email').value;

    if (!isNullOrUndefined(email)) {
      this.loginform.get("password").setValidators([Validators.required]);
      this.loginform.get('password').updateValueAndValidity();
    }
  }

  onLogin() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
