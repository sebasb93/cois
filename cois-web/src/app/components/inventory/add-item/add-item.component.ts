import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AddItemRequest } from '../../../models/add-item-request';

@Component({
  selector: 'app-inventory-add-item-component',
  templateUrl: './add-item.component.html'
})

export class AddItemComponent implements OnInit {

  addItemForm: FormGroup;

  addItemRequest: AddItemRequest;

  isVisible: boolean;

  constructor() {
    this.isVisible = false;
    this.addItemRequest = {
      Code: '',
      Description: '',
      Name: '',
      Unit: '',
      Quantity: 0,
    };

    this.addItemForm = new FormGroup({});

  }

  ngOnInit() {
    this.loadForm();
    this.isVisible = true;
  }

  loadForm() {
    this.addItemForm = new FormGroup({
      code: new FormControl(this.addItemRequest.Code, [Validators.required]),
      name: new FormControl(this.addItemRequest.Name, [Validators.required]),
      description: new FormControl(this.addItemRequest.Description, [Validators.required]),
      unit: new FormControl(this.addItemRequest.Unit, [Validators.required]),
      quantity: new FormControl(this.addItemRequest.Quantity, [Validators.required])
    });


  }

}
