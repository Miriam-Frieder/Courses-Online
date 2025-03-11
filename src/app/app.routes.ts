import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CursesListComponent } from '../components/curses-list/curses-list.component';
import { CurseDetailComponent } from '../components/curse-detail/curse-detail.component';
import { CourseManagementComponent } from '../components/course-management/course-management.component';
import { authGuard } from '../guards/auth.guard';
import { teacherGuard } from '../guards/teacher.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'courses', component: CursesListComponent,
        children: [
            {
                path: ':id', component: CurseDetailComponent,
            },
        ],
        canActivate:[authGuard]
        
    },
    {
        path: 'course-management', component: CourseManagementComponent,
        children: [
            {
                path: ':id', component: CurseDetailComponent,
            },
        ],
        canActivate:[teacherGuard]
    },

];
