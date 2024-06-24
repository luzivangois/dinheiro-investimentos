import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private loginUrl = 'http://localhost:5000/user/login';

 constructor(private http: HttpClient) { }

 login(login: string, password: string): Observable<any> {
    return this.http.post<LoginResponse>(this.loginUrl, { login, password }).pipe(
      tap((value) => {
         sessionStorage.setItem("auth-token", value.token)
      })
    )
 }
}