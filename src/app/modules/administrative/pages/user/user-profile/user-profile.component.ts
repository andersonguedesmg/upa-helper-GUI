import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonHelper } from 'src/app/shared/helpers/common.helper';
import User from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userIdLogged: string = '';
  userLogged: User = new User();

  constructor(public userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsersForTable();
  }

  getUsersForTable() {
    let userIdLogged = CommonHelper.getUserIdLogged();
    this.userService.getUserById(Number(userIdLogged)).subscribe((response) => {
      this.userLogged = response;
    });
  }
}
