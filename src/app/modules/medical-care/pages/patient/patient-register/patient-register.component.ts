import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  CONFIRM_DIALOG_MESSAGE_SAVE_PATIENT,
  CONFIRM_DIALOG_TITLE_SAVE_PATIENT,
  MESSAGE_ERROR_SAVE_PATIENT,
  MESSAGE_SUCCESS_SAVE_PATIENT,
} from 'src/app/shared/constants/messages';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.scss'],
})
export class PatientRegisterComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  isActive: boolean = true;
  form: UntypedFormGroup;
  name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  socialName = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  birthday = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  rg = this.fb.control('', {
    validators: [Validators.maxLength(15)],
    updateOn: 'blur',
  });
  cpf = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(14)],
    updateOn: 'blur',
  });
  cns = this.fb.control('', {
    validators: [Validators.maxLength(18)],
    updateOn: 'blur',
  });
  zipCode = this.fb.control('', {
    validators: [Validators.maxLength(9)],
    updateOn: 'blur',
  });
  address = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  number = this.fb.control('', {
    validators: [Validators.maxLength(20)],
    updateOn: 'blur',
  });
  neighborhood = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  city = this.fb.control('', {
    validators: [Validators.maxLength(100)],
    updateOn: 'blur',
  });
  state = this.fb.control('', {
    validators: [Validators.maxLength(25)],
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
    validators: [Validators.maxLength(15)],
    updateOn: 'blur',
  });
  fatherName = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  motherName = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  ethnicityId = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  genderId = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public patientService: PatientService,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      name: this.name,
      socialName: this.socialName,
      birthday: this.birthday,
      rg: this.rg,
      cpf: this.cpf,
      cns: this.cns,
      zipCode: this.zipCode,
      address: this.address,
      number: this.number,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      complement: this.complement,
      telephone: this.telephone,
      cell: this.cell,
      fatherName: this.fatherName,
      motherName: this.motherName,
      ethnicityId: this.ethnicityId,
      genderId: this.genderId,
      isActive: this.isActive,
    });
  }

  ngOnInit(): void {}

  createPatient() {
    if (this.form.valid) {
      const title = CONFIRM_DIALOG_TITLE_SAVE_PATIENT;
      const message = CONFIRM_DIALOG_MESSAGE_SAVE_PATIENT;
      const dialogData = new ConfirmDialogModel(title, message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: dialogData,
      });

      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          const messageSuccessNewPatient = MESSAGE_SUCCESS_SAVE_PATIENT;
          const messageErrorNewPatient = MESSAGE_ERROR_SAVE_PATIENT;
          this.patientService.createPatient(request).subscribe(
            (data) => {
              // console.log('DATA', data);
              this.snackBar.open(messageSuccessNewPatient, 'X', {
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
                this.snackBar.open(messageErrorNewPatient, 'X', {
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
}
