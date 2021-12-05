import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Attendance from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements AfterViewInit {
  displayedColumns: string[] = [
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

  constructor(public attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.getAttendancesCompletedForTable();
  }

  getAttendancesCompletedForTable() {
    this.attendanceService
      .getAttendancesCompletedForTable()
      .subscribe((response) => {
        this.dataSource.data = response as Attendance[];
      });
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
