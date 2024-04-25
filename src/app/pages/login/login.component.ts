import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
 selector: 'app-login',
 standalone: true,
 imports: [HttpClientModule, FormsModule],
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 username: string = '';
 password: string = '';

 constructor(
  private router: Router,
  private authService: AuthService,
  private toastService: ToastrService
) { }

 login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.toastService.success("Login feito com sucesso!");
        this.router.navigate(["homepage"]);
      },error: () => this.toastService.error("O Login Falhou! Verifique os dados informados e tente novamente.")
    });
 }
 register() {
  this.router.navigate(["register"])
}
}
