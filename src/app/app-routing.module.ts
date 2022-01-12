import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadUsersGuard } from './services/can-load-users.guard';


const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
  },
  {
    path: 'users',
    canLoad: [CanLoadUsersGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
