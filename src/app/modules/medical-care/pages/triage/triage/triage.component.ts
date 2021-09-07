import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Attendance from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { TriageService } from '../../../services/triage.service';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.scss'],
})
export class TriageComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'patientName',
    'patientAge',
    'date',
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
    this.getAttendancesForTable();
  }

  getAttendancesForTable() {
    this.attendanceService.getAttendancesForTable().subscribe((response) => {
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

  newTriage(id: number) {
    this.router.navigate(['/triagem/nova', id]);
  }
}
