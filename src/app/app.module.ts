import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditBookFormComponent } from './components/edit-book-form/edit-book-form.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    BookComponent,
    BookListComponent,
    EditBookFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
