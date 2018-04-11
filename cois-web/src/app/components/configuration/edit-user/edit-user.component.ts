import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditUserRequest } from '../../../models/edit-user-request';
import { User } from '../../../models/user';

@Component({
  selector: 'app-configuration-edit-user-component',
  templateUrl: './edit-user.component.html'
})

export class EditUserComponent implements OnInit {

  isVisible: boolean;
  editUserForm: FormGroup;

  editUserRequest: EditUserRequest;

  @Input()
  selectedUser: User;

  constructor() {
    this.isVisible = false;
  }

  ngOnInit() {
    this.loadUser();
    this.loadForm();
    this.isVisible = true;
  }

  loadUser() {
    this.editUserRequest = {
      nickname: this.selectedUser.nickname,
      password: '',
      passwordRepeat: ''
    };
  }

  loadForm() {
    this.editUserForm = new FormGroup({
      nickname: new FormControl(this.editUserRequest.nickname, [Validators.required]),
      password: new FormControl(this.editUserRequest.password, [Validators.required]),
      passwordRepeat: new FormControl(this.editUserRequest.passwordRepeat, [Validators.required])
    });
  }

  onEdit() {

  }

}
