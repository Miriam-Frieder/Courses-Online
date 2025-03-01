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
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { register } from '../../app/store/actions/auth.actions';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogClose,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;
  authUser$!: Observable<UserModel | null>;
  authError$!: Observable<any>;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private store:Store<AppState>) {
    this.signUpForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      role: ['student', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void { }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  onSubmit(): void {
    console.log(this.signUpForm.value);
    if (this.signUpForm.valid) {
      const { name, email, password, role } = this.signUpForm.value;
      this.store.dispatch(register({ user: { name, email, password, role } }));
      console.log('Submitted');
    }
    this.openLoginDialog();
  }

  openLoginDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent);
  }
}
