import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

export const SkipLoader = new HttpContextToken(() => false);

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private spinnerService: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(SkipLoader)) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      tap(() => { this.spinnerService.show(); }),
      delay(1000),
      finalize(() => {this.spinnerService.hide();})
    );
  }
}
