import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-component',
  templateUrl: './transaction.component.html'
})

export class TransactionComponent implements OnInit {
  isVisible: boolean;

  transactionList: Transaction[];
  rangeNumber: number;
  ranges: number;

  selectedTransaction: Transaction;

  constructor() {
    this.isVisible = false;
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
      id: gen.toString(),
      user: '',
      authorizationUserId: '',
      authorizated: true,
      comments: '',
      type: '',
      authorizationType: '',
      date: new Date(),
      transactionItems:null
      });
    }

  }

}


