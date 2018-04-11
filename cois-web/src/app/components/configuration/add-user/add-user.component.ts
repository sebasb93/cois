import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api-service';
import { AddUserRequest } from '../../../models/add-user-request';

@Component({
  selector: 'app-configuration-add-user-component',
  templateUrl: './add-user.component.html'
})

export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  addUserRequest: AddUserRequest;

  isVisible: boolean;

  constructor(private apiService: ApiService ) {
    this.isVisible = false;
    this.addUserRequest = {
      name: '',
      nickname: '',
      password: '',
      passwordRepeat: ''
    };

    this.addUserForm = new FormGroup({});

  }

  ngOnInit() {
    this.loadForm();
    this.isVisible = true;
  }

  loadForm() {
    this.addUserForm = new FormGroup({
      name: new FormControl(this.addUserRequest.name, [Validators.required]),
      nickname: new FormControl(this.addUserRequest.nickname, [Validators.required]),
      password: new FormControl(this.addUserRequest.password, [Validators.required]),
      passwordRepeat: new FormControl(this.addUserRequest.passwordRepeat, [Validators.required])
    });


  }

  addUser() {
    if (this.addUserForm.valid) {
      this.apiService.addUser(this.addUserRequest).subscribe(
        res => {
          if (res) {
            console.log(res);
          }
        }
      );
    }
  }
}
