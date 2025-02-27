import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // this.openLoginDialog();
  }

}
