import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-transaction-show-transactions-component',
  templateUrl: './show-transactions.component.html'
})

export class ShowTransactionsComponent implements OnInit {
  isVisible: boolean;

  transactionList: Transaction[];
  rangeNumber: number;
  ranges: number;

  showItem: boolean;

  selectedTransaction: Transaction;

  constructor() {
    this.isVisible = false;
    this.showItem = false;
    this.transactionList = [];
  }

  ngOnInit() {
    this.getRangeNumber();
    this.rangeNumber = 1;
    this.LoadTransactions();
    this.isVisible = true;
  }

  getRangeNumber() {
    // Request to api that return the number of available ranges and update var
    this.ranges = 3;
  }

  LoadTransactions() {

    // Request to api with rangeNumber

    this.transactionList = [];

    for (let gen = 0; gen <= 15; gen++ ) {
      this.transactionList.push({
      id: gen.toString() + this.rangeNumber,
      userId: 'usuarioA',
      authorizationUserId: 'admin1',
      authorizated: true,
      comments: ['algunosA', 'algunosB'],
      type: 'input',
      authorizationType: 'manual',
      date: new Date()
      });
    }

  }

  setTransaction(value: Transaction) {
    this.selectedTransaction = value;
    this.showItem = true;
  }

  nextRange() {
    this.getRangeNumber();
    this.rangeNumber = this.rangeNumber < this.ranges ? this.rangeNumber + 1 : this.rangeNumber;
    this.LoadTransactions();
  }

  lastRange() {
    this.getRangeNumber();
    this.rangeNumber = this.rangeNumber === 1 ? 1 : this.rangeNumber - 1;
    this.LoadTransactions();
  }
}
