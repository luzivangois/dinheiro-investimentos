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

  navigateToUsersPanel() {
    this.router.navigate(['users-panel']);
  }

  navigateToAccountsPanel() {
    this.router.navigate(['users-panel']);
  }

  logout() {    
    this.router.navigate(['login']);
  }
}