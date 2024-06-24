import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl: string = "http://localhost:5000/user/register"

  constructor(private httpClient: HttpClient) { }

  register(name: string, login: string, password: string, role: string){
    return this.httpClient.post<any>(this.apiUrl, { name, login, password, role })
  }
}