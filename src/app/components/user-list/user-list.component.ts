import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserView } from 'src/app/models/user';
import { users } from 'src/app/models/user.mock';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<UserView[]>;

  constructor(private readonly userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }

  ngOnInit(): void {}
}
