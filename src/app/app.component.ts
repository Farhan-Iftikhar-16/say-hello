import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'say-hello';
  showFortcel = true;
  showAnalogit = false;
  showForm = false;
  showList = true;
  expand = false;
}
