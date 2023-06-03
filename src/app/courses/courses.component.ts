import { Component, OnInit } from '@angular/core';
import { Courses } from '../Courses';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Courses[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<Courses[]>('/courses')
      .subscribe((val) => (this.courses = val));
  }
}
