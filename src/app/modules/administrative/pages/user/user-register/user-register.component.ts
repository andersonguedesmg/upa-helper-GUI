import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import {
  CONFIRM_DIALOG_MESSAGE_SAVE_USER,
  CONFIRM_DIALOG_TITLE_SAVE_USER,
  MESSAGE_ERROR_SAVE_USER,
  MESSAGE_SUCCESS_SAVE_USER,
} from 'src/app/shared/constants/messages';
import Cep from 'src/app/shared/models/cep.model';
import { CepService } from 'src/app/shared/services/cep.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  private password: string = 'UPA1@email';
  startDate = new Date(1990, 0, 1);
  dataZipCode: any;
  isActive: boolean = true;
  form: FormGroup;
  name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  email = this.fb.control('', {
    validators: [
      Validators.required,
      Validators.maxLength(255),
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    ],
    updateOn: 'blur',
  });
  birthday = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  rg = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(15)],
    updateOn: 'blur',
  });
  cpf = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(14)],
    updateOn: 'blur',
  });
  zipCode = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(9)],
    updateOn: 'blur',
  });
  address = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  number = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(20)],
    updateOn: 'blur',
  });
  neighborhood = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  city = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  state = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(25)],
    updateOn: 'blur',
  });
  complement = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  telephone = this.fb.control('', {
    validators: [Validators.maxLength(14)],
    updateOn: 'blur',
  });
  cell = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(15)],
    updateOn: 'blur',
  });
  council = this.fb.control('', {
    validators: [Validators.maxLength(20)],
    updateOn: 'blur',
  });
  userTypeId = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public userService: UserService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private cepService: CepService
  ) {
    this.form = this.fb.group({
      name: this.name,
      email: this.email,
      birthday: this.birthday,
      rg: this.rg,
      cpf: this.cpf,
      zipCode: this.zipCode,
      address: this.address,
      number: this.number,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      complement: this.complement,
      telephone: this.telephone,
      cell: this.cell,
      council: this.council,
      userTypeId: this.userTypeId,
      isActive: this.isActive,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  createUser() {
    if (this.form.valid) {
      const title = CONFIRM_DIALOG_TITLE_SAVE_USER;
      const message = CONFIRM_DIALOG_MESSAGE_SAVE_USER;
      const dialogData = new ConfirmDialogModel(title, message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: dialogData,
      });

      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          const messageSuccessNewUser = MESSAGE_SUCCESS_SAVE_USER;
          const messageErrorNewUser = MESSAGE_ERROR_SAVE_USER;
          this.userService.createUser(request).subscribe(
            (data) => {
              // console.log('DATA', data);
              this.snackBar.open(messageSuccessNewUser, 'X', {
                duration: 4000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                panelClass: ['success-snackbar'],
              });
              location.reload();
              this.clearForm();
            },
            (erro) => {
              if (erro) {
                this.snackBar.open(messageErrorNewUser, 'X', {
                  duration: 4000,
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                  panelClass: ['error-snackbar'],
                });
              }
            }
          );
        }
      });
    }
  }

  clearForm() {
    this.form.reset();
  }

  consultZipCode(zipCodeValue: string) {
    let zipCode = zipCodeValue.replace('-', '');

    this.cepService.consultZipCode(zipCode).subscribe((response) => {
      this.dataZipCode = response;
      this.loadAddressData(this.dataZipCode);
    });
  }

  loadAddressData(cep: Cep) {
    this.form.patchValue({
      address: cep.logradouro,
      complement: cep.complemento,
      neighborhood: cep.bairro,
      city: cep.localidade,
      state: cep.uf,
    });
  }
}
