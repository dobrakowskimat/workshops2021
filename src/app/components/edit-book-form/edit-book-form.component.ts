import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BookService} from "../../services/book.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss'],
})
export class EditBookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private readonly bookService: BookService,
              private dialogRef: MatDialogRef<EditBookFormComponent>) {
    this.dialogRef = dialogRef
    this.bookForm = new FormGroup({
      title: new FormControl('Book title'),
      authorFirstName: new FormControl("First name"),
      authorLastName: new FormControl("Last name"),
      publicationDateUtc: new FormControl("1900-01-31T00:00:00"),
      isbn: new FormControl("12345678")
    });
  }

  addBook(): void {
    this.bookService.addBook(this.bookForm.value).subscribe()
    this.dialogRef.close()
  }
  ngOnInit(): void {}
}
