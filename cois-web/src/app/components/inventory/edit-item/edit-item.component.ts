import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../models/item';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EditItemRequest } from '../../../models/edit-item-request';

@Component({
  selector: 'app-inventory-edit-item-component',
  templateUrl: './edit-item.component.html'
})

export class EditItemComponent implements OnInit {

  isVisible: boolean;
  editItemForm: FormGroup;

  editItemRequest: EditItemRequest;

  @Input()
  selectedItem: Item;

  constructor() {
    this.isVisible = false;
  }

  ngOnInit() {
    this.loadItem();
    this.loadForm();
    this.isVisible = true;
  }

  loadItem() {
    this.editItemRequest = {
      Name: this.selectedItem.name,
      Description: this.selectedItem.description
    };
  }

  loadForm() {
    this.editItemForm = new FormGroup({
      name: new FormControl(this.editItemRequest.Name, [Validators.required]),
      description: new FormControl(this.editItemRequest.Description, [Validators.required])
    });
  }

  onEdit() {

  }
}
