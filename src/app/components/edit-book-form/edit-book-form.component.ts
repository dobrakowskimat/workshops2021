import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss'],
})
export class EditBookFormComponent implements OnInit {
  bookForm: FormGroup;
  isLoading = false;

  constructor(
    private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number | null },
    public dialogRef: MatDialogRef<EditBookFormComponent>
  ) {
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      authorFirstName: new FormControl(''),
      authorLastName: new FormControl(''),
      publicationDateUtc: new FormControl(''),
      isbn: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if (this.data.id) {
      this.bookService
        .getBookById(this.data.id)
        .subscribe((b) => this.bookForm.patchValue(b));
    }
  }

  onSubmit() {
    this.isLoading = true;
    if (!!this.data.id) {
      this.bookService
        .editBook(this.bookForm.value)
        .subscribe((r) => this.dialogRef.close());
    } else {
      this.bookService
        .addBook(this.bookForm.value)
        .subscribe((r) => this.dialogRef.close());
    }
  }
}
