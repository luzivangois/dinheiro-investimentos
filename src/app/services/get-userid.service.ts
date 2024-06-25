import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class GetUserIdService {

 private apiUrl = 'http://localhost:5000/user/data';

 constructor(private http: HttpClient) { }

 getToken(): string {   
  return sessionStorage.getItem('auth-token') as string;
}

 getUserById(id: string): Observable<any> {
  const headers = new HttpHeaders().set('Authorization', this.getToken());
  return this.http.get(`${this.apiUrl}/${id}`, { headers });
}
}