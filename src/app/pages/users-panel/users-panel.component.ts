import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ModalAllUsersComponent } from '../../modals/modal-allusers/modal-allusers.component';
import { ModalUserComponent } from '../../modals/modal-user/modal-user.component';


@Component({
  selector: 'app-users-panel',
  standalone: true,
  imports: [],
  providers: [UsersService],
  templateUrl: './users-panel.component.html',
  styleUrl: './users-panel.component.scss'
})
export class UsersPanelComponent {
  constructor(
    private router: Router,
    private usersService: UsersService,
    private toastService: ToastrService,
    public dialog: MatDialog
  ) {}

  submitAllUsers() {
    this.usersService.getAllUsers().subscribe({
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
    this.dialog.open(ModalUserComponent, {
      width: '520px',
      height: '650px'
    })
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
