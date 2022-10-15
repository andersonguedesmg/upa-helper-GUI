import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
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
  CONFIRM_DIALOG_TITLE_NEW_TRIAGE,
  CONFIRM_DIALOG_MESSAGE_NEW_TRIAGE,
  MESSAGE_ERROR_SAVE_NEW_TRIAGE,
  MESSAGE_SUCCESS_SAVE_NEW_TRIAGE,
} from 'src/app/shared/constants/messages';
import { CommonHelper } from 'src/app/shared/helpers/common.helper';
import Attendance from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { TriageService } from '../../../services/triage.service';

@Component({
  selector: 'app-triage-register',
  templateUrl: './triage-register.component.html',
  styleUrls: ['./triage-register.component.scss'],
})
export class TriageRegisterComponent implements OnInit {
  attendanceId!: number;
  attendanceData!: Attendance;
  triageDate!: Date;
  selectedPainIntensity: number = 4;
  userIdLogged: number | null = 0;
  form: UntypedFormGroup;
  bloodPressure = this.fb.control('', {
    validators: [Validators.maxLength(11)],
    updateOn: 'blur',
  });
  temperature = this.fb.control('', {
    validators: [Validators.maxLength(8)],
    updateOn: 'blur',
  });
  saturation = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  bloodGlucose = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  pulse = this.fb.control('', {
    validators: [Validators.maxLength(6)],
    updateOn: 'blur',
  });
  respiratoryFrequency = this.fb.control('', {
    validators: [Validators.maxLength(6)],
    updateOn: 'blur',
  });
  weight = this.fb.control('', {
    validators: [Validators.maxLength(9)],
    updateOn: 'blur',
  });
  height = this.fb.control('', {
    validators: [Validators.maxLength(6)],
    updateOn: 'blur',
  });
  imc = this.fb.control('', {
    validators: [Validators.maxLength(11)],
    updateOn: 'blur',
  });
  preInformation = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  medicines = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  allergies = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  painIntensityId = this.fb.control(null, {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  riskRatingId = this.fb.control(null, {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  isPreferred = this.fb.control('', {
    validators: [],
    updateOn: 'blur',
  });
  hasHypertension = this.fb.control(null, {
    validators: [],
  });
  hasDiabetes = this.fb.control(null, {
    validators: [],
  });
  isSmoker = this.fb.control(null, {
    validators: [],
  });
  hasCancer = this.fb.control(null, {
    validators: [],
  });
  isTransplanted = this.fb.control(null, {
    validators: [],
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public triageService: TriageService,
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    public attendanceService: AttendanceService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      bloodPressure: this.bloodPressure,
      temperature: this.temperature,
      saturation: this.saturation,
      bloodGlucose: this.bloodGlucose,
      pulse: this.pulse,
      respiratoryFrequency: this.respiratoryFrequency,
      weight: this.weight,
      height: this.height,
      imc: this.imc,
      preInformation: this.preInformation,
      medicines: this.medicines,
      allergies: this.allergies,
      painIntensityId: this.painIntensityId,
      riskRatingId: this.riskRatingId,
      isPreferred: false,
      hasHypertension: this.hasHypertension,
      hasDiabetes: this.hasDiabetes,
      isSmoker: this.isSmoker,
      hasCancer: this.hasCancer,
      isTransplanted: this.isTransplanted,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.attendanceId = params['id'];
    });
    this.triageDate = new Date();
    this.attendanceService
      .getAttendanceById(this.attendanceId)
      .subscribe((response) => {
        this.attendanceData = response;
      });
  }

  createTriage() {
    if (this.form.valid) {
      const title = CONFIRM_DIALOG_TITLE_NEW_TRIAGE;
      const message = CONFIRM_DIALOG_MESSAGE_NEW_TRIAGE;
      const dialogData = new ConfirmDialogModel(title, message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: dialogData,
      });
      this.userIdLogged = CommonHelper.getUserIdLogged();
      this.form = this.fb.group({
        ...this.form.value,
        attendanceId: Number(this.attendanceId),
        triageDate: this.triageDate,
        userId: this.userIdLogged,
      });
      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          const messageSuccessNewTriage = MESSAGE_SUCCESS_SAVE_NEW_TRIAGE;
          const messageErrorNewTriage = MESSAGE_ERROR_SAVE_NEW_TRIAGE;
          this.triageService.createTriage(request).subscribe(
            (data) => {
              this.snackBar.open(messageSuccessNewTriage, 'X', {
                duration: 4000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                panelClass: ['success-snackbar'],
              });
              this.clearForm();
              this.router.navigate(['/triagem']);
            },
            (erro) => {
              if (erro) {
                this.snackBar.open(messageErrorNewTriage, 'X', {
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
