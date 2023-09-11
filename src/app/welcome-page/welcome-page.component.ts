import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  imagePath: string = 'assets/Logo.png';

  constructor(public sharedService: SharedService, private router: Router) { this.sharedService.showToolbar = true;}

  

  ngOnInit() {
  }

  navigateStepper() {
    this.router.navigate(['/stepper']);
  }

}

