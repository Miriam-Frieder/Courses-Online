import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../interceptors/auth.interceptor';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { CourseEffects } from './store/effects/course.effects';
import { authReducer } from './store/reducers/auth.reducer';
import { courseReducer } from './store/reducers/course.reducer';
import { lessonReducer } from './store/reducers/lesson.reducer';
import { LessonEffects } from './store/effects/lesson.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideClientHydration(),
  provideAnimationsAsync(),
  provideStore({
    auth: authReducer,
    courses: courseReducer,
    lessons: lessonReducer
  }),
  provideHttpClient(withInterceptors([authInterceptor])),
  provideEffects([AuthEffects, CourseEffects, LessonEffects])]
};
