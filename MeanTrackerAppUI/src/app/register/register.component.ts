import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup;
  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit() {
    // this.createForm();
  }
  /*createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      confirmPassword: ['', Validators.required ]
    });
  }

  get firstName() {
    return this.registerForm.get('userName');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  addUser(firstName, lastName, email, mid, password, projectName, projectRole, managerName, location) {
    this.service.addUser(firstName, lastName, email, mid, password, projectName, projectRole, managerName, location);
  }*/

}
