import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
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
  public form: FormGroup;
  public diagnosis = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public prescription = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public cid = this.fb.control('', {
    validators: [Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public exitData = this.fb.control('', {
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
        console.log(response);
      });
  }

  createAppointment() {
    if (this.form.valid) {
      const title = `Salvar essa Consulta`;
      const message = `Você tem certeza de que quer salvar essa consulta?`;
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
            this.router.navigate(['/triagem']);
          });
        }
      });
    }
  }

  clearForm() {
    this.form.reset();
  }
}
