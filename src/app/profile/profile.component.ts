import {Component, OnInit} from '@angular/core';
import {Student} from "../models/student";

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
  percentage : number | undefined = 40;

  ngOnInit(): void {
    //get active user

    //set percentage

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
  }
}
