import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { BookActions } from '.';

@Injectable()
export class BookEffects {
  loadBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      concatMap(() =>
        this.bookService.getBooks().pipe(
          map((books) => BookActions.loadBooksSuccess({ books })),
          catchError((error) => of(BookActions.loadBooksFailed({ error })))
        )
      )
    )
  );

  updateBook = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.updateBook),
      concatMap((action) =>
        this.bookService.editBook(action.book).pipe(
          map(() => BookActions.updateBookSuccess()),
          catchError((error) => of(BookActions.updateBookFailed({ error })))
        )
      )
    )
  );

  updateBookSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.updateBookSuccess),
      concatMap(() => of(BookActions.loadBooks()))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly bookService: BookService
  ) {}
}
