import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient,private userService: UserService) {}

  register(user: UserModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap(response => {
        // Assuming response contains user data and token
        const user: UserModel = response.user; // Adjust according to your API response
        this.userService.setCurrentUser(user); // Save the user in the UserService
        sessionStorage.setItem('token', response.token);
      })
    )
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        // Assuming response contains user data and token
        const user: UserModel = response.user; // Adjust according to your API response
        this.userService.setCurrentUser(user); // Save the user in the UserService
        sessionStorage.setItem('token', response.token);
      })
    );
  }
}
