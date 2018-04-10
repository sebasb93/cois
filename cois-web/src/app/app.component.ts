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
  showLogout: boolean;
  sessionData: SessionUser;

  constructor(private dataService: DataService) {
    this.loginLabel = 'Login';
    this.showLogout = false;
  }

  ngOnInit () {

    this.loadSession();
  }

  loadSession() {
    this.validateLogin();
    this.setLoginButton();
  }

  setLoginButton() {
    if (this.sessionData) {
      this.loginLabel = this.sessionData.name;
      this.showLogout = true;
    }
  }

  setLogout() {
    this.dataService.setSessionKey({name: '', userId: ''});
    this.loadSession();
  }

  validateLogin() {
    if (this.dataService.getSessionKey().userId !== '') {
      this.sessionData = {
        userId: this.dataService.getSessionKey().userId,
        name: this.dataService.getSessionKey().name
      };
    } else {
      this.sessionData = undefined;
    }

  }


}
