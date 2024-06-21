import { Component } from '@angular/core';
import { AllUsersService } from '../../services/all-users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MoldalAllUsersComponent } from '../../modals/modal-allusers/modal-allusers.component';


@Component({
  selector: 'app-users-panel',
  standalone: true,
  imports: [],
  providers: [AllUsersService],
  templateUrl: './users-panel.component.html',
  styleUrl: './users-panel.component.scss'
})
export class UsersPanelComponent {
  constructor(
    private router: Router,
    private allUserService: AllUsersService,
    private toastService: ToastrService,
    public dialog: MatDialog
  ) {}

  submitAllUsers() {
    this.allUserService.getAllUsers().subscribe({
      next: (data) => {
        this.toastService.success("Buscando Todos Usuários");
        this.dialog.open(MoldalAllUsersComponent, {
          width: '520px',
          height: '700px',
          data: {users: data}
        });
    },
      error: () => this.toastService.error("Usuários não encontrados!")
    })
  }
  
  navigateToUserId() {
    this.router.navigate(['user-by-id']);
  }

  navigateToUpdateUser() {
    this.router.navigate(['user-by-id']);
  }

  navigateToDeleteUser() {
    this.router.navigate(['user-delete-id']);
  }
  
  backToHomePage() {    
    this.router.navigate(['homepage']);
  }  

}
