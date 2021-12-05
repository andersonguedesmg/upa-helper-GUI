import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
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
  public form: FormGroup;
  public receptionInformation = this.fb.control('', {
    validators: [Validators.maxLength(512)],
    updateOn: 'blur',
  });

  constructor(
    public attendanceService: AttendanceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public patientService: PatientService,
    private router: Router,
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
      const title = `Novo Atendimento`;
      const message = `Você tem certeza de que quer abrir essa Nova Ficha de Atendimento?`;
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
        patientId: this.patientId,
        statusId: this.statusId,
      });
      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          this.attendanceService.createAttendance(request).subscribe(() => {
            this.clearForm();
            this.router.navigate(['/atendimento/novo']);
          });
        }
      });
    }
  }

  clearForm() {
    this.form.reset();
  }

  calculateAge(birthday: any): any {
    if (birthday) {
      var timeDiff = Math.abs(Date.now() - new Date(birthday).getTime());
      return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }
}
