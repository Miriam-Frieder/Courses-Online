import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { AppState } from '../../app/store/app.state';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../app/store/app.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  authUser$!: Observable<UserModel | null>;

  constructor(public dialog: MatDialog,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.authUser$ = this.store.select(selectAuthUser);
  }

  openLoginDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent)
  }
  openSignUpDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent)
  }

}
