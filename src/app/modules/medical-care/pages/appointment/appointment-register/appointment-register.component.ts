import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Attendance from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { TriageService } from '../../../services/triage.service';

@Component({
  selector: 'app-appointment-register',
  templateUrl: './appointment-register.component.html',
  styleUrls: ['./appointment-register.component.scss'],
})
export class AppointmentRegisterComponent implements OnInit {
  attendanceId!: number;
  attendanceData!: Attendance;
  triageDate!: Date;
  selectedPainIntensity: number = 4;
  userIdLogged: string = '';

  constructor(
    public triageService: TriageService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public attendanceService: AttendanceService,
    private router: Router,
    public dialog: MatDialog
  ) {}

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
}
