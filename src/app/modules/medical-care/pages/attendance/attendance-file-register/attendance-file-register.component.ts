import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public form: FormGroup;
  public receptionInformation = this.fb.control('', {
    validators: [Validators.maxLength(512)],
    updateOn: 'blur',
  });

  constructor(
    public attendanceService: AttendanceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public patientService: PatientService
  ) {
    this.form = this.fb.group({
      receptionInformation: this.receptionInformation,
      patientAge: this.patientAge,
      arrivalDate: this.arrival,
      isSamu: false,
      isActive: true,
      patientId: this.patientId,
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
      this.patientId = this.calculateAge(this.patientData.id);
    });
  }

  saveNewAttendance() {
    if (this.form.valid) {
      var request = this.form.value();
      this.attendanceService.addAttendance(request).subscribe(() => {
        location.reload();
        this.clearForm();
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
