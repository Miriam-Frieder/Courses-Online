import { Component } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-curses-list',
  standalone: true,
  imports: [   MatListModule],
  templateUrl: './curses-list.component.html',
  styleUrl: './curses-list.component.css'
})
export class CursesListComponent {
  courses: CourseModel[] = []; // Array to hold the list of courses

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCourses(); // Load courses when the component initializes
  }

  loadCourses(): void {
    // Simulated course data; in a real application, this would come from a service
    this.courses = [
      { id: 1, title: 'Angular Basics', description: 'Learn the basics of Angular.', teacherId: 1 },
      { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular features.', teacherId: 2},
      // Add more courses as needed
    ];
  }

  navigateToCourseDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]); // Navigate to the course detail route
  }
}
