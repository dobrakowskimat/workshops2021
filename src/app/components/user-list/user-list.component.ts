import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private readonly userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {}

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }
}
