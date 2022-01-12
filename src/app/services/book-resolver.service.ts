import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolverService implements Resolve<Book> {

  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book | Observable<Book> | Promise<Book> {
    return this.bookService.getBookById(parseInt(route.paramMap.get('id') as string));
  }
}
