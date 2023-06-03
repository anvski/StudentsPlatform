import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() content: Note | undefined;
}
