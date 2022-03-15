import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Book, BookView } from 'src/app/models/book';
import { BookActions } from '.';

export interface BookState {
  books: Book[];
  isBooksLoading: boolean;
  isBookEditLoading: boolean;
}

const initialBookState: BookState = {
  books: [],
  isBooksLoading: false,
  isBookEditLoading: false,
};

export const bookReducer = createReducer<BookState>(
  initialBookState,
  on(BookActions.loadBooks, (state, action) => {
    return {
      ...state,
      isBooksLoading: true,
    };
  }),
  on(BookActions.loadBooksSuccess, (state, action): BookState => {
    return {
      ...state,
      books: action.books,
      isBooksLoading: false,
    };
  }),
  on(BookActions.loadBooksFailed, (state, action): BookState => {
    return {
      ...state,
      isBooksLoading: false,
    };
  }),
  on(BookActions.updateBook, (state, action): BookState => {
    return {
      ...state,
      isBookEditLoading: true,
    };
  }),
  on(BookActions.updateBookSuccess, (state, action): BookState => {
    return {
      ...state,
      isBookEditLoading: false,
    };
  }),
  on(BookActions.updateBookFailed, (state, action): BookState => {
    return {
      ...state,
      isBookEditLoading: false,
    };
  })
);

const getBooksFeature = createFeatureSelector<BookState>('booksFeature');

export const getBooks = createSelector(getBooksFeature, (state): BookView[] =>
  state.books.map((book) => {
    return {
      id: book.id,
      title: book.title,
      author: book.authorFirstName + ' ' + book.authorLastName,
      publicationDateUtc: book.publicationDateUtc,
      isbn: book.isbn,
      tags: book.tags,
    };
  })
);
export const getBooksCount = createSelector(getBooks, (state) => state.length);
export const getIsBooksLoading = createSelector(
  getBooksFeature,
  (state) => state.isBooksLoading
);
export const getIsBookEditLoading = createSelector(
  getBooksFeature,
  (state) => state.isBookEditLoading
);
