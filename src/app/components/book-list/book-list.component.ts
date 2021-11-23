import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookView } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<BookView[]>;

  constructor(private readonly bookService: BookService) {
    this.books$ = this.bookService.getBooks().pipe(
      map((books) =>
        books.map((b) => {
          return {
            ...b,
            author: `${b.authorFirstName} ${b.authorLastName}`,
          };
        })
      )
    );
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe();
  }

  ngOnInit(): void {}
}
