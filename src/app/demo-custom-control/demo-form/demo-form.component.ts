import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss'],
})
export class DemoFormComponent {
  myForm: FormGroup = this.fb.group({
    someInput: 'initial value',
    rating: 3,
  });

  constructor(private fb: FormBuilder) {}
}
