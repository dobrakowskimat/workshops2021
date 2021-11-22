import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bookListName = '';
  @Output() newBookEvent = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }

  addBook(id: string, name: string, cost: string) {
    var book : Book = {id: +id, name: name, cost: +cost};
    this.newBookEvent.emit(book);
  }
}
