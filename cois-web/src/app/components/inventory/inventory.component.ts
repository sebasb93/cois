import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-inventory-component',
  templateUrl: './inventory.component.html'
})

export class InventoryComponent implements OnInit {

  isVisible: boolean;

  itemList: Item[];
  rangeNumber: number;
  ranges: number;

  selectedItem: Item;

  showItem: boolean;
  showAdd: boolean;
  showEdit: boolean;

  constructor(private apiService: ApiService) {
    this.isVisible = false;
    this.showItem = false;
    this.itemList = [];
  }

  ngOnInit() {
    this.getRangeNumber();
    this.rangeNumber = 1;
    this.LoadItems();
    this.isVisible = true;
  }

  getRangeNumber() {
    // Request to api that return the number of available ranges and update var
    this.ranges = 3;
  }

  LoadItems() {
    this.itemList = [];

    this.apiService.GetAllItems().subscribe(
      res => {
        if (res) {
          this.itemList = res.listItems;
        }
      }

    );

    // Request to api with rangeNumber

    // this.itemList = [];

    // for (let gen = 0; gen <= 15; gen++ ) {
    //   this.itemList.push({
    //     id: gen.toString() + this.rangeNumber,
    //     code: 'code' + gen,
    //     name: 'name' + ' ' + this.rangeNumber + ' ' + gen,
    //     description: 'descripction data' + gen,
    //     unit: 'unit' + gen,
    //     quantity: 5 + gen
    //   });
    // }

  }

  nextRange() {
    this.getRangeNumber();
    this.rangeNumber = this.rangeNumber < this.ranges ? this.rangeNumber + 1 : this.rangeNumber;
    this.LoadItems();
  }

  lastRange() {
    this.getRangeNumber();
    this.rangeNumber = this.rangeNumber === 1 ? 1 : this.rangeNumber - 1;
    this.LoadItems();
  }

  setItem(value: Item) {
    this.selectedItem = value;
    this.showAdd = false;
    this.showEdit = false;
    this.showItem = true;
  }

  onEdit() {
    this.showItem = false;
    this.showEdit = true;
  }

  onAdd() {
    this.showItem = false;
    this.showEdit = false;
    this.showAdd = true;
  }
}
