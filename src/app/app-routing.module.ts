import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { CanLoadUsersGuard } from './services/can-load-users.guard';

const routes: Routes = [
  {
    path: 'books',
    canActivate: [MsalGuard],
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'users',
    canLoad: [CanLoadUsersGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'demo-control',
    loadChildren: () =>
      import('./demo-custom-control/demo-custom-control.module').then(
        (m) => m.DemoCustomControlModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
