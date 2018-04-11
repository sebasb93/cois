import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-configuration-show-user-component',
  templateUrl: './show-user.component.html'
})

export class ShowUserComponent implements OnInit {

  isVisible: boolean;

  userList: Item[];
  rangeNumber: number;
  ranges: number;

  @Input()
  selectedUser: Item;

  constructor() {
    this.isVisible = false;
  }

  ngOnInit() {
    this.isVisible = true;
  }
}
