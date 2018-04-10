import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    console.log(this.apiService.getTest());

  }
}
