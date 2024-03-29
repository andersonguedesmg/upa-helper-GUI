import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import {
  CONFIRM_DIALOG_TITLE_NEW_ATTENDANCE,
  CONFIRM_DIALOG_MESSAGE_NEW_ATTENDANCE,
  MESSAGE_ERROR_SAVE_NEW_ATTENDANCE,
  MESSAGE_SUCCESS_SAVE_NEW_ATTENDANCE,
} from 'src/app/shared/constants/messages';
import { PatientEditModalComponent } from '../../../components/patient-edit-modal/patient-edit-modal.component';
import Patient from '../../../models/patient.model';
import { AttendanceService } from '../../../services/attendance.service';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-attendance-file-register',
  templateUrl: './attendance-file-register.component.html',
  styleUrls: ['./attendance-file-register.component.scss'],
})
export class AttendanceFileRegisterComponent implements OnInit {
  patientId!: number;
  patientData!: Patient;
  arrival!: Date;
  patientAge: number = 0;
  statusId: number = 1;
  isSamu: boolean = false;
  form: UntypedFormGroup;
  receptionInformation = this.fb.control('', {
    validators: [Validators.maxLength(512)],
    updateOn: 'blur',
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public attendanceService: AttendanceService,
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    public patientService: PatientService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      receptionInformation: this.receptionInformation,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.patientId = params['id'];
    });
    this.arrival = new Date();
    this.patientService.getPatientById(this.patientId).subscribe((response) => {
      this.patientData = response;
      this.patientAge = this.calculateAge(this.patientData.birthday);
    });
  }

  createAttendance() {
    if (this.form.valid) {
      const title = CONFIRM_DIALOG_TITLE_NEW_ATTENDANCE;
      const message = CONFIRM_DIALOG_MESSAGE_NEW_ATTENDANCE;
      const dialogData = new ConfirmDialogModel(title, message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: dialogData,
      });

      this.form = this.fb.group({
        ...this.form.value,
        patientAge: this.patientAge.toString(),
        arrivalDate: this.arrival,
        isSamu: this.isSamu,
        patientId: Number(this.patientId),
        statusId: this.statusId,
      });

      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          const messageSuccessNewAttendance =
            MESSAGE_SUCCESS_SAVE_NEW_ATTENDANCE;
          const messageErrorNewAttendance = MESSAGE_ERROR_SAVE_NEW_ATTENDANCE;
          this.attendanceService.createAttendance(request).subscribe(
            (data) => {
              // console.log('DATA', data);
              this.snackBar.open(messageSuccessNewAttendance, 'X', {
                duration: 4000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                panelClass: ['success-snackbar'],
              });
              this.clearForm();
              this.router.navigate(['/atendimento/novo']);
            },
            (erro) => {
              if (erro) {
                this.snackBar.open(messageErrorNewAttendance, 'X', {
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

  openPatientEditModal() {
    const dialogRef = this.dialog.open(PatientEditModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  calculateAge(birthday: any): any {
    if (birthday) {
      var timeDiff = Math.abs(Date.now() - new Date(birthday).getTime());
      return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }
}
