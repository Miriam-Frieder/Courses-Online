import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.apiUrl);
  }

  getCourseById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(`${this.apiUrl}/${id}`);
  }

  createCourse(course: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(this.apiUrl, course);
  }

  updateCourse(id: number, course: CourseModel): Observable<CourseModel> {
    return this.http.put<CourseModel>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
  enrollStudent(courseId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${courseId}/enroll`, { userId });
  }

  unenrollStudent(courseId: number, userId: number): Observable<void> {
    return this.http.request<void>('delete', `${this.apiUrl}/${courseId}/unenroll`, {  body: { userId } });
  }
  getCoursesByStudentId(studentId: number): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${this.apiUrl}/student/${studentId}`);
  }

  
}
