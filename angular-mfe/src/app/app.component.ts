import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mfe';
  text: FormControl = this.fb.control('');
  checkbox: FormControl = this.fb.control('false');
  constructor(private fb: FormBuilder) {
  }
}
