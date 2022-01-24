import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { HideAfterDirective } from './services/hide-after.directive';
import { HighlightDirective } from './services/highlight.directive';
import { MyIfElseDirective } from './services/my-if-else.directive';

@NgModule({
  declarations: [AppComponent, HideAfterDirective, HighlightDirective, MyIfElseDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
