import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import {
  CONFIRM_DIALOG_TITLE_NEW_APPOINTMENT,
  CONFIRM_DIALOG_MESSAGE_NEW_APPOINTMENT,
} from 'src/app/shared/constants/messages';
import { CommonHelper } from 'src/app/shared/helpers/common.helper';
import Attendance from '../../../models/attendance.model';
import { AppointmentService } from '../../../services/appointment.service';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
  selector: 'app-appointment-register',
  templateUrl: './appointment-register.component.html',
  styleUrls: ['./appointment-register.component.scss'],
})
export class AppointmentRegisterComponent implements OnInit {
  attendanceId!: number;
  attendanceData!: Attendance;
  appointmentDate!: Date;
  form: FormGroup;
  diagnosis = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  prescription = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  cid = this.fb.control('', {
    validators: [Validators.maxLength(100)],
    updateOn: 'blur',
  });
  exitData = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });

  constructor(
    public appointmentsService: AppointmentService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public attendanceService: AttendanceService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      diagnosis: this.diagnosis,
      prescription: this.prescription,
      cid: this.cid,
      exitData: this.exitData,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.attendanceId = params['id'];
    });
    this.appointmentDate = new Date();
    this.attendanceService
      .getAttendanceById(this.attendanceId)
      .subscribe((response) => {
        this.attendanceData = response;
      });
  }

  createAppointment() {
    if (this.form.valid) {
      const title = CONFIRM_DIALOG_TITLE_NEW_APPOINTMENT;
      const message = CONFIRM_DIALOG_MESSAGE_NEW_APPOINTMENT;
      const dialogData = new ConfirmDialogModel(title, message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: dialogData,
      });
      let userIdLogged = CommonHelper.getUserIdLogged();
      this.form = this.fb.group({
        ...this.form.value,
        attendanceId: Number(this.attendanceId),
        appointmentDate: this.appointmentDate,
        userId: Number(userIdLogged),
      });
      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          this.appointmentsService.createAppointment(request).subscribe(() => {
            this.clearForm();
            this.router.navigate(['/consulta']);
          });
        }
      });
    }
  }

  clearForm() {
    this.form.reset();
  }
}
