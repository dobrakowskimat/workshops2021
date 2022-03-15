import { createAction, props } from '@ngrx/store';
import { Book, BookView } from 'src/app/models/book';

export const updateBook = createAction(
  '[Book] Update Book',
  props<{ book: Book }>()
);

export const updateBookSuccess = createAction('[Book] Update Book Success');
export const updateBookFailed = createAction(
  '[Book] Update Book Failed',
  props<{ error: any }>()
);

export const loadBooks = createAction('[Book] load Books');
export const loadBooksSuccess = createAction(
  '[Book] load BooksSuccess',
  props<{ books: Book[] }>()
);
export const loadBooksFailed = createAction(
  '[Book] load BooksFailed',
  props<{ error: any }>()
);
