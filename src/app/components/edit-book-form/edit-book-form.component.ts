import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss']
})
export class EditBookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private readonly bookService: BookService,
              private matDialog: MatDialogRef<EditBookFormComponent>) {
    this.matDialog = matDialog;
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      authorFirstName: new FormControl(''),
      authorLastName: new FormControl(''),
      publicationDateUtc: new FormControl('0000-00-00T00:00:00'),
      isbn: new FormControl('0')
    });
  }

  addBook(): void {
    this.bookService.addBook(this.bookForm.value).subscribe();
    this.matDialog.close();
  }

  ngOnInit(): void {
  }

}
