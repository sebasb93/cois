import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NgbModule],
  styleUrls: [
    './app.component.css',
    '../assets/css/bootstrap.min.css'
  ]
})
export class AppComponent {
  title = 'COIS-WEB';
}
