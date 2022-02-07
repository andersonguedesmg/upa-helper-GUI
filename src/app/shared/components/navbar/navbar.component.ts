import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CommonHelper } from '../../helpers/common.helper';
import {
  ConfirmDialogSessionExpiredComponent,
  ConfirmDialogSessionExpiredModel,
} from '../confirm-dialog-session-expired/confirm-dialog-session-expired.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() inputSideNav!: MatSidenav;
  userNameLogged = CommonHelper.getUserNameLogged();

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  timeBeforeTokenExpires(): Date {
    let token: any = window.localStorage.getItem('token');
    let tokenExpirationDate = this.authService.getTokenExpirationDate(token);
    var numberOfMlSeconds = tokenExpirationDate.getTime();
    var addMlSeconds = 30000;
    var timeBeforeTokenExpires = new Date(numberOfMlSeconds - addMlSeconds);
    console.log(tokenExpirationDate);
    console.log(timeBeforeTokenExpires);
    return timeBeforeTokenExpires;
  }

  sessionExpired() {
    const dialogData = new ConfirmDialogSessionExpiredModel();
    const dialogRef = this.dialog.open(ConfirmDialogSessionExpiredComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult == false) {
        this.onLogout();
      }
    });
  }
}
