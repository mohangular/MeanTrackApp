import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private logingrp: FormBuilder) {
    this.createForm();
  }
  onLogin(form: NgForm) {
    console.log(form.value.email);
  }

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

  ngOnInit() {
  }

}
