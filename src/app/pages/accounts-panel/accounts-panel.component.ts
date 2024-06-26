import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ModalAllUsersComponent } from '../../modals/modal-allusers/modal-allusers.component';


@Component({
  selector: 'app-accounts-panel',
  standalone: true,
  imports: [],
  providers: [UsersService],
  templateUrl: './accounts-panel.component.html',
  styleUrl: './accounts-panel.component.scss'
})
export class AccountsPanelComponent {
  constructor(
    private router: Router,
    private userService: UsersService,
    private toastService: ToastrService,
    public dialog: MatDialog
  ) {}

  submitAllUsers() {
    this.userService.getAllUsers().subscribe({
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
  
  deposit() {
    this.router.navigate(['user-by-id']);
  }

  withdraw() {
    this.router.navigate(['user-by-id']);
  }

  balance() {
    this.router.navigate(['user-delete-id']);
  }

  invest_crypto() {
    this.router.navigate(['user-delete-id']);
  }

  invest_stocks() {
    this.router.navigate(['user-delete-id']);
  }

  total_investments() {
    this.router.navigate(['user-delete-id']);
  }

  investment_statement() {
    this.router.navigate(['user-delete-id']);
  }
  
  backToHomePage() {    
    this.router.navigate(['homepage']);
  }  

}
