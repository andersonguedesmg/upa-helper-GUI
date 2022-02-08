import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CommonHelper } from 'src/app/shared/helpers/common.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-dialog-session-expired',
  templateUrl: './confirm-dialog-session-expired.component.html',
  styleUrls: ['./confirm-dialog-session-expired.component.scss'],
})
export class ConfirmDialogSessionExpiredComponent implements OnInit {
  hidePassword = true;
  form: FormGroup;
  password = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogSessionExpiredComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogSessionExpiredModel,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      cpf: CommonHelper.getUserCpdLogged(),
      password: this.password,
    });
  }

  ngOnInit() {}

  async onLogin() {
    localStorage.clear();
    if (this.form.valid) {
      var request = this.form.value;
      let login = await this.authService.login(request);
      if (login) {
        window.localStorage.setItem(
          'userCpfLogged',
          String(this.form.value.cpf)
        );
        this.dialogRef.close(true);
        location.reload();
      }
    }
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}

export class ConfirmDialogSessionExpiredModel {
  constructor() {}
}
