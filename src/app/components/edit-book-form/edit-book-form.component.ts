import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss'],
})
export class EditBookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      title: new FormControl('supre title'),
    });
  }

  ngOnInit(): void {}
}
