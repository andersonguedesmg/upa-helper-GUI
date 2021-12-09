import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Attendance from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { TriageService } from '../../../services/triage.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss'],
})
export class WaitingRoomComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'patientName',
    'patientAge',
    'date',
    'attendanceStatus',
  ];
  attendanceList: Attendance[] = [];
  dataSource = new MatTableDataSource<Attendance>(this.attendanceList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public triageService: TriageService,
    public attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    this.getAttendancesOpenedForTable();
  }

  getAttendancesOpenedForTable() {
    this.attendanceService
      .getAttendancesOpenedForTable()
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
