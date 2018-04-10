import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { LoginRequest } from '../../models/login-request';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  isVisible: boolean;
  loginForm: FormGroup;

  loginRequest: LoginRequest;

  constructor(private dataService: DataService) {
    this.isVisible = false;
    this.loginForm = new FormGroup({});
    this.loginRequest = {
      user: '',
      pass: ''
    };
  }

  ngOnInit() {
    // this.dataService.setSessionKey({userId: 'id123', name: 'Juan' });
    this.loadForm();
  }

  loadForm() {
    this.loginForm = new FormGroup({
      user: new FormControl(this.loginRequest.user, [Validators.required]),
      pass: new FormControl(this.loginRequest.pass, [Validators.required])
    });
  }
}
