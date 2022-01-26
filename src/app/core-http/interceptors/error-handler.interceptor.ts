import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe( // -> next.handle(request) -> next.handle(request) -> Request to server
      retry(2),
      catchError((error) => {
        alert('Wystąpił bład podczas pobierania danych. Spróbuj ponownie.');
        return throwError(error);
      })
    );
  }
}
