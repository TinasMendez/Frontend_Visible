import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  imagePath: string = 'assets/Logo.png';
  nombre: String = "";
  apellido: String = "";
  pais: String = "";
  email: String = "";
  password: String = "";
  showToolbar = false;

  constructor(public sharedService: SharedService, private router: Router) { this.sharedService.showToolbar = false;}

  ngOnInit() {
  }

  navigateWelcomePage() {
    this.router.navigate(['/welcome-page']);
  }

  navigateLogin(){
    this.router.navigate(['/login']);

  }
    

  

}
