import { Component } from '@angular/core';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { RegisterService } from '../../services/register.service';

interface RegisterForm {
  name: FormControl,
  login: FormControl,
  password: FormControl,
  role: FormControl
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LoginLayoutComponent,
    ReactiveFormsModule,
    LoginInputComponent
  ],
  providers: [
    RegisterService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterForm>;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private toastService: ToastrService
  ){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),      
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      role: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  submit(){
    this.registerService.register(this.registerForm.value.name, this.registerForm.value.login, this.registerForm.value.password, this.registerForm.value.role).subscribe({
      next: () => this.toastService.success("Usuário criado com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
