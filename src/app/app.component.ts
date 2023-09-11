import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VisibleFrontend';
  imagePath: string = 'assets/Logo blanco.png';
  showToolbar = true;
  
  constructor(public sharedService: SharedService) {}
}
