import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LessonModel } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) {}

  getLessons(courseId: number): Observable<LessonModel[]> {
    return this.http.get<LessonModel[]>(`${this.apiUrl}/${courseId}/lessons`);
  }

  getLessonById(courseId: number, id: number): Observable<LessonModel> {
    return this.http.get<LessonModel>(`${this.apiUrl}/${courseId}/lessons/${id}`);
  }

  createLesson(courseId: number, lesson: LessonModel): Observable<LessonModel> {
    return this.http.post<LessonModel>(`${this.apiUrl}/${courseId}/lessons`, lesson);
  }

  updateLesson(courseId: number, id: number, lesson: LessonModel): Observable<LessonModel> {
    return this.http.put<LessonModel>(`${this.apiUrl}/${courseId}/lessons/${id}`, lesson);
  }

  deleteLesson(courseId: number, id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${courseId}/lessons/${id}`);
  }

}