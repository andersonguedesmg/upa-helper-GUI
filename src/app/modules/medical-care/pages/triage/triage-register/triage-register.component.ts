import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  isActive: boolean = true;
  public form: FormGroup;
  public bloodPressure = this.fb.control('', {
    validators: [Validators.maxLength(11)],
    updateOn: 'blur',
  });
  public temperature = this.fb.control('', {
    validators: [Validators.maxLength(7)],
    updateOn: 'blur',
  });
  public saturation = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  public bloodGlucose = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  public pulse = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  public respiratoryFrequency = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  public weight = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  public height = this.fb.control('', {
    validators: [Validators.maxLength(10)],
    updateOn: 'blur',
  });
  public preInformation = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public medicines = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public personalBackground = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public painIntensity = this.fb.control(null, {
    validators: [],
    updateOn: 'blur',
  });
  public riskRating = this.fb.control(null, {
    validators: [],
    updateOn: 'blur',
  });
  public isPreferred = this.fb.control('', {
    validators: [],
    updateOn: 'blur',
  });

  constructor(
    public triageService: TriageService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public attendanceService: AttendanceService,
    private router: Router
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
      preInformation: this.preInformation,
      medicines: this.medicines,
      personalBackground: this.personalBackground,
      painIntensity: this.painIntensity,
      riskRating: this.riskRating,
      isPreferred: false,
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

  saveNewTriage() {
    if (this.form.valid) {
      this.form = this.fb.group({
        ...this.form.value,
        attendanceId: this.attendanceId,
        triageDate: this.triageDate,
        userId: 1,
        isActive: this.isActive,
      });
      var request = this.form.value;
      this.triageService.addTriage(request).subscribe(() => {
        this.clearForm();
        this.router.navigate(['/triagem']);
      });
    }
  }

  clearForm() {
    this.form.reset();
  }
}
