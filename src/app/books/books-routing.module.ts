import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookResolverService } from "../services/book-resolver.service";
import { BookListComponent } from "./book-list/book-list.component";
import { EditBookComponent } from "./edit-book/edit-book.component";

const routes: Routes = [
  {
    path: 'add',
    component: EditBookComponent,
  },
  {
    path: 'edit/:id',
    component: EditBookComponent,
    resolve: {
      book: BookResolverService,
    },
  },
  {
    path: '',
    pathMatch: 'full',
    component: BookListComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
