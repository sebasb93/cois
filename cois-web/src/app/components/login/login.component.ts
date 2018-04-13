import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { LoginRequest } from '../../models/login-request';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  isVisible: boolean;
  loginForm: FormGroup;

  loginRequest: LoginRequest;

  constructor(private apiService: ApiService, private dataService: DataService, private router: Router) {
    this.isVisible = false;
    this.loginForm = new FormGroup({});
    this.loginRequest = {
      nickname: '',
      password: ''      
    };
  }

  ngOnInit() {
    // this.dataService.setSessionKey({userId: 'id123', name: 'Juan' });
    this.loadForm();
  }

  loadForm() {
    this.loginForm = new FormGroup({
      user: new FormControl(this.loginRequest.nickname, [Validators.required]),
      pass: new FormControl(this.loginRequest.password, [Validators.required])
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.apiService.Login(this.loginRequest).subscribe(
        res => {
          if(res.Code === 0) {
            this.apiService.VerifyFinger(res.Descripcion).subscribe( 
              res => {
                if(res.Code === 0) {
                  // Res ok
                  this.dataService.setSessionKey(res.Descripcion);
                  this.router.navigate(['']);
                  console.log("verify ok");
                }else{
                  console.log(res.Descripcion);
                }
              }
            );
          }else{
            console.log(res.Descripcion);
          }
        }
      );
    }
  }
}
