import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private loginUrl = 'http://localhost:5000/api/login'; // Substitua pela URL do seu backend

 constructor(private http: HttpClient) { }

 login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password });
 }
}