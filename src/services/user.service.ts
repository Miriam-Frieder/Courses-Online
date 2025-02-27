import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: UserModel | null = null;

  setCurrentUser(user: UserModel): void {
    this.currentUser = user;
  }

  getCurrentUser(): UserModel | null {
    return this.currentUser;
  }

  clearCurrentUser(): void {
    this.currentUser = null;
  }
}
