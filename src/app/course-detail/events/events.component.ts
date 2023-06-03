import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs';
import { Event } from 'src/app/models/event';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'dateCreated',
    'dateScheduled',
    'createdBy',
    'location',
    'attendees',
  ];
  dataSource: Event[] | undefined;

  constructor(
    private courseService: CourseServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getEvents();
  }
  getEvents() {
    this.route.parent?.paramMap
      .pipe(
        tap((val) => console.log(val)),
        filter((val) => val.get('id') != null),
        map((val) => val.get('id')),
        mergeMap((val) => this.courseService.getEventsForCourseById(val!))
      )
      .subscribe((val) => {
        this.events = val;
        this.dataSource = val;
      });
  }
}
