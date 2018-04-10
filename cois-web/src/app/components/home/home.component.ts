import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { SocketService } from '../../services/socket-service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService, private socketService: SocketService) {

  }

  ngOnInit() {
    console.log(this.apiService.getTest());
    this.socketService.initSocket();
    this.socketService.send('hola');
  }
}
