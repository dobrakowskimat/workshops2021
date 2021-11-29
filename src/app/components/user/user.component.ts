import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Output() userDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteUser(id: number) {
    this.userDeleted.emit(id);
  }
}
