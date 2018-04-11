import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../services/api-service';


@Component({
  selector: 'app-configuration-component',
  templateUrl: './configuration.component.html'
})

export class ConfigurationComponent implements OnInit {

  isVisible: boolean;

  userList: User[];
  rangeNumber: number;
  ranges: number;

  selectedUser: User;

  showUser: boolean;
  showAdd: boolean;
  showEdit: boolean;

  constructor(private apiService: ApiService) {
    this.isVisible = false;
    this.showUser = false;
    this.userList = [];
  }

  ngOnInit() {
    this.LoadItems();
    this.isVisible = true;
  }

  LoadItems() {
    this.userList = [];

    this.apiService.GetAllUsers().subscribe(
      res => {
        if (res) {
          this.userList = res.userList;
        }
      }
    );
  }

  setItem(value: User) {
    this.selectedUser = value;
    this.showAdd = false;
    this.showEdit = false;
    this.showUser = true;
  }

  onEdit() {
    this.showUser = false;
    this.showEdit = true;
  }

  onAdd() {
    this.showUser = false;
    this.showEdit = false;
    this.showAdd = true;
  }


}
