import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  notes: Note[] = [
    { name: 'Test', url: 'test', type: 'pdf', size: 50 },
    { name: 'Test', url: 'test', type: 'pdf', size: 50 },
    { name: 'Test', url: 'test', type: 'pdf', size: 50 },
    { name: 'Test', url: 'test', type: 'pdf', size: 50 },
  ];
}
