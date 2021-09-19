import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  isSamu: boolean = false;
  isActive: boolean = true;
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
    private router: Router
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

  saveNewAttendance() {
    if (this.form.valid) {
      this.form = this.fb.group({
        ...this.form.value,
        patientAge: this.patientAge.toString(),
        arrivalDate: this.arrival,
        isSamu: this.isSamu,
        isActive: this.isActive,
        patientId: this.patientId,
      });
      var request = this.form.value;
      this.attendanceService.addAttendance(request).subscribe(() => {
        this.clearForm();
        this.router.navigate(['/atendimento/novo']);
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
