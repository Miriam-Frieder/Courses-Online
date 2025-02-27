import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Role, UserModel } from '../models/user.model';
import { UserService } from './user.service';

interface RegisterResponse {
  message: string,
  userId: number
}

interface LoginResponse{
  token:string, 
  userId: number, 
  role: Role,
  username: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient,private userService: UserService) {}

  register(user: Omit<UserModel,'id'>): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, user).pipe(
      tap(response => {
        const registeredUser: UserModel = {
          id: response.userId, 
          username: user.username,
          email: user.email,
          password: user.password, 
          role: user.role
        };      
        this.userService.setCurrentUser(registeredUser); 
      })
    )
  }

  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        const currentUser: UserModel = {
          id: response.userId, 
          username: response.username,
          email: credentials.email,
          password: credentials.password, 
          role: response.role
        };        
        this.userService.setCurrentUser(currentUser);
        sessionStorage.setItem('token', response.token);
      })
    );
  }
}
