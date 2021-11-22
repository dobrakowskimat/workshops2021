import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { users } from 'src/app/models/user.mock';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userName = 'Mateusz';
  isWarningVisible = false;
  users$: Observable<Array<User>> = of(users);
  constructor() {}
  ngOnInit(): void {}

  warnUser() {
    alert('You clicked me You Bastard!');
  }

  toggleWarning() {
    this.isWarningVisible = !this.isWarningVisible;
  }

  delete(user: User) {
    // this.users = this.users.filter( (u) => u.id !== user.id )
  }
}
