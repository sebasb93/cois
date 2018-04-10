import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NgbModule],
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'COIS-WEB';
}
