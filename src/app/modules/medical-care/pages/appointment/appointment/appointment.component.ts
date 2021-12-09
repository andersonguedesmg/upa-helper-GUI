import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Attendance from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { TriageService } from '../../../services/triage.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'patientName',
    'patientAge',
    'date',
    'attendanceStatus',
    'actions',
  ];
  attendanceList: Attendance[] = [];
  dataSource = new MatTableDataSource<Attendance>(this.attendanceList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public triageService: TriageService,
    public attendanceService: AttendanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAttendancesForAppointmentForTable();
  }

  getAttendancesForAppointmentForTable() {
    this.attendanceService
      .getAttendancesForAppointmentForTable()
      .subscribe((response) => {
        this.dataSource.data = response as Attendance[];
      });
  }

  newAppointment(id: number) {
    this.router.navigate(['/consulta/nova', id]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
