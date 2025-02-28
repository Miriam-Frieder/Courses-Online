import {  Routes  } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CursesListComponent } from '../components/curses-list/curses-list.component';
import { LessonListComponent } from '../components/lesson-list/lesson-list.component';
import { CurseDetailComponent } from '../components/curse-detail/curse-detail.component';
import { CourseManagementComponent } from '../components/course-management/course-management.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses', component: CursesListComponent,
        children:[
        { path: ':id', component: CurseDetailComponent , 
            children:[{path: 'lessons', component: LessonListComponent}]},
        ]
    },
    { path: 'course-management', component: CourseManagementComponent },
  
];
