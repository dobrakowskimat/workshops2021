import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${environment.apiUrl}api/Books`);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${environment.apiUrl}api/Books/${id}`);
  }

  deleteBook(id: number): Observable<unknown> {
    return this.httpClient.delete<unknown>(
      `${environment.apiUrl}api/Books/${id}`
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${environment.apiUrl}api/Books`, book);
  }

  editBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${environment.apiUrl}api/Books/${book.id}`, book);
  }
}
