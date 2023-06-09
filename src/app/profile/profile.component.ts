import {Component, OnInit} from '@angular/core';
import {Student} from "../models/student";
import {HttpClient} from "@angular/common/http";
import {Course} from "../models/course";
import {Event} from "../models/event";

interface Link {
  text: string;
  link: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{
  student: Student | undefined;
  percentage : number | undefined;
  courses : Course[] | undefined;
  pastEvents : Event[] | undefined;
  upcomingEvents : Event[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //get active user
    fetch('/students/getActiveUser')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve student data');
        }
        return response.json();
      })
      .then(data => {
        // Handle the retrieved student data
        this.student = data;
        console.log('Retrieved student:', data);
      })
      .catch(error => {
        console.error('Error occurred while retrieving student:', error);
      });

    this.getPercentage();
    this.getCourses();
    this.getPastEvents();
    this.getUpcomingEvents();
  }
  getPercentage(){
    //set percentage
    fetch('/students/weekly-progress')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve student data');
        }
        return response.json();
      })
      .then(data => {
        // Handle the retrieved student data
        this.percentage = data;
        const progressBar = document.getElementById('progress-bar');

        if (progressBar) {
          const bar = document.createElement("div");
          bar.innerHTML = '<div style="display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem;">' +
            '<div  class="progress-bar" role="progressbar" style="width:' +
            this.percentage +
            '%; background-color: #528A8A" aria-valuemin="0" aria-valuemax="100">' +
            '</div></div>'
          progressBar.appendChild(bar);
        }
      })
      .catch(error => {
        console.error('Error occurred while retrieving student:', error);
      });
  }
  getCourses(){
    //get courses
    this.http
      .get<Course[]>('/students/myCourses')
      .subscribe((val) => (this.courses = val));
  }
  getPastEvents(){
    //get past events
    this.http
      .get<Event[]>('/students/myPastEvents')
      .subscribe((val) => (this.pastEvents = val));
  }
  getUpcomingEvents(){
    //get upcoming events
    this.http
      .get<Event[]>('/students/myUpcomingEvents')
      .subscribe((val) => (this.upcomingEvents = val));
  }
}
