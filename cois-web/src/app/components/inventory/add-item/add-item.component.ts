import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AddItemRequest } from '../../../models/add-item-request';
import { ApiService } from '../../../services/api-service';

@Component({
  selector: 'app-inventory-add-item-component',
  templateUrl: './add-item.component.html'
})

export class AddItemComponent implements OnInit {

  addItemForm: FormGroup;

  addItemRequest: AddItemRequest;

  isVisible: boolean;

  constructor(private apiService: ApiService ) {
    this.isVisible = false;
    this.addItemRequest = {
      code: '',
      description: '',
      name: '',
      unit: '',
      quantity: 0,
    };

    this.addItemForm = new FormGroup({});

  }

  ngOnInit() {
    this.loadForm();
    this.isVisible = true;
  }

  loadForm() {
    this.addItemForm = new FormGroup({
      code: new FormControl(this.addItemRequest.code, [Validators.required]),
      name: new FormControl(this.addItemRequest.name, [Validators.required]),
      description: new FormControl(this.addItemRequest.description, [Validators.required]),
      unit: new FormControl(this.addItemRequest.unit, [Validators.required]),
      quantity: new FormControl(this.addItemRequest.quantity, [Validators.required])
    });


  }

  addItem(){
  if(this.addItemForm.valid){
    this.apiService.addItem(this.addItemRequest).subscribe(
      res => {
        if(res) {
          console.log(res);
        }
      }
    );
  }

  }

}
