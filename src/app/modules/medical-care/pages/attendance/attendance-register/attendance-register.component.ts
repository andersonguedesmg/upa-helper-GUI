import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(public patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatientsForTable();
  }

  getPatientsForTable() {
    this.patientService.getPatients().subscribe((response) => {
      this.dataSource.data = response as Patient[];
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
