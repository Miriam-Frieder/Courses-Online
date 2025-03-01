import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { login } from '../../app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogClose
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authUser$!: Observable<UserModel | null>;
  authError$!: Observable<any>;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private store: Store<AppState>) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  openSignUpDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent); 
  }

   
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.store.dispatch(login({ email, password }));
    }
    this.dialog.closeAll();

  }
}