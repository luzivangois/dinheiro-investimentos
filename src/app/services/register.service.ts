import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl: string = "http://localhost:8080/auth/"

  constructor(private httpClient: HttpClient) { }

  register(name: string, login: string, password: string, role: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "register", { name, login, password, role }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.login)
      })
    )
  }
}