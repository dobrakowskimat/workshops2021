import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookView } from 'src/app/models/book';
import { EditBookDialogWrapperComponent } from '../edit-book-dialog-wrapper/edit-book-dialog-wrapper.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book!: BookView;
  @Output() bookDeleted = new EventEmitter<number>();

  constructor(public matDialog: MatDialog) {}

  ngOnInit(): void {}

  deleteBook(id: number, title: string) {
    if (confirm(`Are you sure you want to remove book '${title}'?`)) {
      this.bookDeleted.emit(id);
    }
  }

  openEditBookModal(id: number) {
    this.matDialog.open(EditBookDialogWrapperComponent, { data: { id: id } });
  }
}
