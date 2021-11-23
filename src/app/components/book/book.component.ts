import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book, BookView } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book!: BookView;
  @Output() bookDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteBook(id: number) {
    this.bookDeleted.emit(id);
  }
}
