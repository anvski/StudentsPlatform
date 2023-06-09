import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss'],
})
export class DiscussionComponent implements OnInit {
  messages: Message[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<Message[]>('/events/messages')
      .subscribe((val) => (this.messages = val));
    console.log(this.messages);
  }
}
