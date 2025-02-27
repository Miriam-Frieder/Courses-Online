import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) {}

  openLoginDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent)
  }
  openSignUpDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent)
  }

}
