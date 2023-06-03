import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, filter, map, mergeMap, tap } from 'rxjs';
import { CourseServiceService } from '../services/course-service.service';
import { Course } from '../models/course';
import { Event } from '../models/event';

interface Link {
  text: string;
  link: string;
}

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  id: string | null = null;
  links: Link[] = [];
  activeLink: Link | undefined;
  course: Course | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseServiceService
  ) {}
  ngOnInit(): void {
    this.getCourse();
    this.links = [
      { text: 'Events', link: `/course/${this.id}/events` },
      { text: 'Notes', link: `/course/${this.id}/notes` },
    ];
    this.activeLink = this.links[0];
    this.router.navigate(['/course', this.id, 'events']);
  }

  getCourse() {
    this.route.paramMap
      .pipe(
        filter((val) => val.get('id') != null),
        tap((val) => (this.id = val.get('id'))),
        map((val) => val.get('id')),
        mergeMap((val) => this.courseService.getCourseById(val!))
      )
      .subscribe((val) => (this.course = val));
  }
}
