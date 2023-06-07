import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  private baseUrl = '/courses';
  private eventsUrl = '/events';

  constructor(private http: HttpClient) {}

  getCourseById(id: string) {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  getEventsForCourseById(id: string) {
    return this.http.get<Event[]>(`${this.eventsUrl}/${id}`);
  }
}
