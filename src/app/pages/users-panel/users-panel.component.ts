import { Component } from '@angular/core';
import { AllUsersService } from '../../services/all-users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ModalAllUsersComponent } from '../../modals/modal-allusers/modal-allusers.component';


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

  AllUsers() {
    this.allUserService.getAllUsers().subscribe({
      next: (data) => {
        this.toastService.success("Buscando Todos Usuários");
        this.dialog.open(ModalAllUsersComponent, {
          width: '520px',
          height: '700px',
          data: {users: data}
        });
    },
      error: () => this.toastService.error("Usuários não encontrados!")
    })
  }
  
  UserId() {
    this.router.navigate(['user-by-id']);
  }

  UpdateUser() {
    this.router.navigate(['user-by-id']);
  }

  DeleteUser() {
    this.router.navigate(['user-delete-id']);
  }
  
  HomePage() {    
    this.router.navigate(['homepage']);
  }  

}
