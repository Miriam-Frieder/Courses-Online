import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { selectAuthUser } from '../../app/store/app.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButton, MatCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authUser$: Observable<UserModel | null>;


  constructor(private store: Store<AppState>, private router: Router) {
    this.authUser$ = this.store.select(selectAuthUser);

  }

  start() {
    this.authUser$.subscribe(
      (user) => {
        if(user){
          this.router.navigate(['/courses']);
        } else {
          alert("Please login to continue");
        }
      }
    )
  
  }
}