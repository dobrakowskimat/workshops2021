import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BookView } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

import { MatDialog } from '@angular/material/dialog';
import { EditBookDialogWrapperComponent } from '../edit-book-dialog-wrapper/edit-book-dialog-wrapper.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getBooks } from '../store/book.reducer';
import { loadBooks } from '../store/book.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<BookView[]>;
  // booksOutDated$: Observable<void>;
  constructor(
    private readonly bookService: BookService,
    public matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private readonly store: Store
  ) {
    // this.booksOutDated$ = this.bookService.booksOutdated$ as Observable<void>;
    this.books$ = this.store.select(getBooks);

    // this.books$ = this.booksOutDated$.pipe(
    //   switchMap(() =>
    //     this.bookService.getBooks().pipe(
    //       map((books) =>
    //         books.map((b) => {
    //           return {
    //             ...b,
    //             author: `${b.authorFirstName} ${b.authorLastName}`,
    //           };
    //         })
    //       )
    //     )
    //   )
    // );
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe();
  }

  openAddBookPage() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  openAddBookModal() {
    this.matDialog.open(EditBookDialogWrapperComponent, { data: { id: null } });
  }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
  }
}
