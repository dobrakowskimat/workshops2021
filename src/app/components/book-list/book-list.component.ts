import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books : Array<Book> = []
  Name: string = 'Koszyk';

  constructor() { }

  ngOnInit(): void {
  }

  addBook(book: Book){
    this.books.push(book);
  }
}
