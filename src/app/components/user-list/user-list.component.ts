import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userName = 'Mateusz';
  isWarningVisible = false;
  constructor() {}
  ngOnInit(): void {}

  warnUser() {
    alert('You clicked me You Bastard!');
  }

  toggleWarning() {
    this.isWarningVisible = !this.isWarningVisible;
  }
}
