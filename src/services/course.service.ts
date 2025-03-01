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
    const headers = this.createAuthorizationHeader();
    return this.http.get<CourseModel[]>(this.apiUrl, { headers });
  }

  getCourseById(id: number): Observable<CourseModel> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<CourseModel>(`${this.apiUrl}/${id}`, { headers });
  }

  createCourse(course: CourseModel): Observable<CourseModel> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<CourseModel>(this.apiUrl, course, { headers });
  }

  updateCourse(id: number, course: CourseModel): Observable<CourseModel> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<CourseModel>(`${this.apiUrl}/${id}`, course, { headers });
  }

  deleteCourse(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token'); // או כל דרך אחרת לאחסון ה-token
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}