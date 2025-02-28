import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../../models/course.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-curse-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './curse-detail.component.html',
  styleUrl: './curse-detail.component.css'
})
export class CurseDetailComponent{
  @Input() course!: CourseModel; 
  enroll(): void {
    // Logic to enroll in the course
  }

  leave(): void {
    // Logic to leave the course
  }
}
