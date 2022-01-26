import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor } from './interceptors/api-url.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { LogResponseInterceptor } from './interceptors/log-response.interceptor';


@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // injector.get(HTTP_INTERCEPTORS)
      useClass: ApiUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    }
  ],
  imports: [
    CommonModule
  ]
})
export class CoreHttpModule { }
