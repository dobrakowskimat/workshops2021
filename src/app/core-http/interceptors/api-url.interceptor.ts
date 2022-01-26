import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiRequest = request.clone({
      url: this.prepareUrl(request.url),
    });

    return next.handle(apiRequest);
  }

  private prepareUrl(url: string): string {
    const result = url.startsWith('https://') ? url : environment.apiUrl + url;
    return result;
  }
}
