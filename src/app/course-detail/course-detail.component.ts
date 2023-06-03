import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((val) => (this.id = val.get('id')));
    this.links = [
      { text: 'Events', link: `/course/${this.id}/events` },
      { text: 'Notes', link: `/course/${this.id}/notes` },
    ];
    this.activeLink = this.links[0];
    this.router.navigate(['/course', this.id, 'events']);
  }
}
