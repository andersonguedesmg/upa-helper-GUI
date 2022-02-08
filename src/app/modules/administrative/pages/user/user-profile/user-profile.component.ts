import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import {
  CONFIRM_DIALOG_TITLE_CHANGE_PASSWORD,
  CONFIRM_DIALOG_MESSAGE_CHANGE_PASSWORD,
} from 'src/app/shared/constants/messages';
import { CommonHelper } from 'src/app/shared/helpers/common.helper';
import User from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userIdLogged: number | null = 0;
  userLogged: User = new User();
  form: FormGroup;
  newPassword = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  confirmNewPassword = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      newPassword: this.newPassword,
      confirmNewPassword: this.confirmNewPassword,
    });
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.userIdLogged = CommonHelper.getUserIdLogged();
    this.userService
      .getUserById(Number(this.userIdLogged))
      .subscribe((response) => {
        this.userLogged = response;
      });
  }

  changePassword() {
    this.userIdLogged = CommonHelper.getUserIdLogged();
    if (this.form.valid) {
      const title = CONFIRM_DIALOG_TITLE_CHANGE_PASSWORD;
      const message = CONFIRM_DIALOG_MESSAGE_CHANGE_PASSWORD;
      const dialogData = new ConfirmDialogModel(title, message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: dialogData,
      });
      this.form = this.fb.group({
        ...this.form.value,
        userId: Number(this.userIdLogged),
      });
      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          this.userService
            .changePassword(this.userIdLogged, request)
            .subscribe(() => {
              this.clearForm();
            });
        }
      });
    }
  }

  clearForm() {
    this.form.reset();
  }
}
