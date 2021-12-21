import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialWidgetsModule } from '../material-widgets/material-widgets.module';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [SharedModule, MaterialWidgetsModule],
  exports: [UserListComponent, UserComponent],
})
export class UsersModule {}
