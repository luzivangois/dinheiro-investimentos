import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private loginUrl = 'http://localhost:5127/api/authentication/login';

 constructor(private http: HttpClient) { }

 login(Login: string, Password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { Login, Password });
 }
}