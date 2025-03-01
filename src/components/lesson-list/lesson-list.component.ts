import { Component } from '@angular/core';
import { LessonModel } from '../../models/lesson.model';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent {
  lessons: LessonModel[] = [
    new LessonModel(1, 'Introduction to Angular', 'This lesson covers the basics of Angular framework.', 101),
    new LessonModel(2, 'Components and Templates', 'Learn about components and templates in Angular.', 101),
    new LessonModel(3, 'Services and Dependency Injection', 'Understand how to use services for DI in Angular.', 102),
    new LessonModel(4, 'Routing in Angular', 'Learn how routing works in Angular applications.', 102)
  ];
}
