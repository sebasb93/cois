import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-inventory-show-items-component',
  templateUrl: './show-items.component.html'
})



export class ShowItemComponent implements OnInit {

  isVisible: boolean;

  itemList: Item[];
  rangeNumber: number;
  ranges: number;

  @Input()
  selectedItem: Item;

  constructor() {
    this.isVisible = false;
  }

  ngOnInit() {
    this.isVisible = true;
  }
}
