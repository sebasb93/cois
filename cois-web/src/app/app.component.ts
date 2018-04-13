import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './services/data-service';
import { SessionUser } from './models/session-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NgbModule],
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {
  title = 'COIS-WEB';

  loginLabel: string;  
  sessionData: SessionUser;

  constructor(private dataService: DataService) {
    this.loginLabel = 'Login';    
  }

  ngOnInit () {

    
  }

  validateLogin() {
    return this.dataService.getSessionKey() === '' ? true : false;
  }

  Logout() {
    this.dataService.setSessionKey('');
  }



}
