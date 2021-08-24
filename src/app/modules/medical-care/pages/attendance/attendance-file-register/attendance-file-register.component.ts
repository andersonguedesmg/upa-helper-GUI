import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
  selector: 'app-attendance-file-register',
  templateUrl: './attendance-file-register.component.html',
  styleUrls: ['./attendance-file-register.component.scss'],
})
export class AttendanceFileRegisterComponent implements OnInit {
  public form: FormGroup;
  public receptionInformation = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });

  constructor(
    public attendanceService: AttendanceService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      receptionInformation: this.receptionInformation,
    });
  }

  ngOnInit(): void {}
}
