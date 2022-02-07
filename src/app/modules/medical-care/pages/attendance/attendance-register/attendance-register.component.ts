import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AttendanceUnknownModalComponent } from '../../../components/attendance-unknown-modal/attendance-unknown-modal.component';
import Patient from '../../../models/patient.model';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-attendance-register',
  templateUrl: './attendance-register.component.html',
  styleUrls: ['./attendance-register.component.scss'],
})
export class AttendanceRegisterComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cpf', 'cns', 'birthday', 'actions'];
  patientList: Patient[] = [];
  dataSource = new MatTableDataSource<Patient>(this.patientList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public patientService: PatientService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPatientsForTable();
  }

  getPatientsForTable() {
    this.patientService.getPatientsForTable().subscribe((response) => {
      this.dataSource.data = response as Patient[];
    });
  }

  openAttendanceUnknownModal() {
    const dialogRef = this.dialog.open(AttendanceUnknownModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
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

  newAttendance(id: number) {
    this.router.navigate(['/atendimento/ficha', id]);
  }
}
