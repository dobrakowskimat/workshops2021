import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from './shared/shared.module';
import { HideAfterDirective } from './services/hide-after.directive';
import { HighlightDirective } from './services/highlight.directive';
import { CoreHttpModule } from './core-http/core-http.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MsalBroadcastService, MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType, BrowserCacheLocation } from "@azure/msal-browser";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HideAfterDirective, HighlightDirective],
  imports: [
    MsalModule.forRoot( new PublicClientApplication({ // MSAL Configuration
          auth: {
            clientId: "2d839c69-559b-495b-bd65-cc516b96796d",
            authority: "https://login.microsoftonline.com/29aadf7c-9915-49c9-adf0-1986c58d17a2",
            redirectUri: "http://localhost:4200",
        },
          cache: {
              cacheLocation : BrowserCacheLocation.LocalStorage,
              storeAuthStateInCookie: true, // set to true for IE 11
          },
          system: {
              loggerOptions: {
                  loggerCallback: () => {},
                  piiLoggingEnabled: false
              }
          }
      }),
    {
      interactionType: InteractionType.Redirect, // MSAL Guard Configuration
    },
    {
      interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
      protectedResourceMap: new Map([
        ['https://ng-workshop-2021.azurewebsites.net', ['api://cd04ad36-0147-4bbe-86c9-0e20faecebe9/Books.Read']],
        ['https://graph.microsoft.com/v1.0/me/', ['user.read']]
      ]),

    }),

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreHttpModule,
    NgxSpinnerModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 15,
      logOnly: environment.production,
    }),
  ],
  providers: [
    MatDatepickerModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
