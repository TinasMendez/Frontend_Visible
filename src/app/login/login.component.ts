import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: String = "";
  password: String = "";
  imagePath: string = 'assets/Logo.png';

  constructor(public sharedService: SharedService, private router: Router) { this.sharedService.showToolbar = false;}

  

  ngOnInit(){
  }

  navigateWelcomePage() {
    this.router.navigate(['/welcome-page']);
  }

  navigateSignUp(){
    this.router.navigate(['/sign-up']);
  }
  
}
