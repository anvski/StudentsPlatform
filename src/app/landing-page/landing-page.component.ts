import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../Courses';
import { Students } from '../Students';
import { Events } from '../Events';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  courses: Courses[] = [];
  students: Students[] = [];
  events: Events[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<Courses[]>('/courses')
      .subscribe((val) => (this.courses = val));
    this.http
      .get<Students[]>('/students')
      .subscribe(
        (val) => ((this.students = val))
      );
    console.log('TEST ' + this.students)
    this.http
      .get<Events[]>('/events')
      .subscribe((val) => (this.events = val));
  }
}
