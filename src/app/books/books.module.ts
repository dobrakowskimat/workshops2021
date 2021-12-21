import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookFormComponent } from './edit-book-form/edit-book-form.component';
import { EditBookDialogWrapperComponent } from './edit-book-dialog-wrapper/edit-book-dialog-wrapper.component';
import { BookComponent } from './book/book.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialWidgetsModule } from '../material-widgets/material-widgets.module';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    EditBookFormComponent,
    EditBookDialogWrapperComponent,
  ],
  imports: [SharedModule, MaterialWidgetsModule],
  exports: [
    BookComponent,
    BookListComponent,
    EditBookFormComponent,
    EditBookDialogWrapperComponent,
  ],
})
export class BooksModule {}
