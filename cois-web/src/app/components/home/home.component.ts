import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { DataService } from '../../services/data-service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  id: string;

  constructor(private apiService: ApiService, private dataService: DataService) {
    this.id = '';
  }

  ngOnInit() {
    console.log(this.apiService.getTest());
    this.id = this.dataService.getSessionKey().userId;
  }
}
