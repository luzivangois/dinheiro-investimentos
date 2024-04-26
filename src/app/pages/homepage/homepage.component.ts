import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigateToUserId() {
    this.router.navigate(['usuario-consulta']);
  }

  checkBalanced() {
    this.router.navigate(['usuario-consulta']);
  }

  makeDeposit() {
    this.router.navigate(['usuario-consulta']);
  }

  makeWithdrawal() {
    this.router.navigate(['usuario-consulta']);
  }  
  
  navigateToFileUpload() {
    this.router.navigate(['fileupload']);
  }
  
  logout() {    
    this.router.navigate(['login']);
  }
}