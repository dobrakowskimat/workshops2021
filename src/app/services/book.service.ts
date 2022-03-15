import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, map, shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SkipLoader } from '../core-http/interceptors/loader.interceptor';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // booksOutdated$ = new BehaviorSubject<void>(0 as unknown as void);
  constructor(private readonly httpClient: HttpClient) {}

  getBooks(skipLoader: boolean = false): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`api/Books`, {
      context: new HttpContext().set(SkipLoader, skipLoader),
    });
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${environment.apiUrl}api/Books/${id}`);
  }

  deleteBook(id: number): Observable<unknown> {
    return this.httpClient.delete<unknown>(`api/Books/${id}`);
  }

  isTitleDuplicated(title: string): Observable<boolean> {
    return this.getBooks(true).pipe(
      map((books) => books.some((book) => book.title === title))
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient
      .post<Book>(`${environment.apiUrl}api/Books`, book)
      .pipe(
        delay(500),
        tap(() => {
          // this.booksOutdated$.next();
        })
      );
  }

  editBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(
      `${environment.apiUrl}api/Books/${book.id}`,
      book
    );
  }
}
