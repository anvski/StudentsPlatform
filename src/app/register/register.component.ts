import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../add-event/add-event.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private router: Router) {}
  matcher = new MyErrorStateMatcher();
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {}
  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();
}
