import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../models/student";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  students: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<Student[]>('/students/scoreboard')
      .subscribe((val) => (this.students = val));
  }
}
