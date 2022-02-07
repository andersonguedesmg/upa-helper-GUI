import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientEditModalComponent } from '../../../components/patient-edit-modal/patient-edit-modal.component';
import Patient from '../../../models/patient.model';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cpf', 'birthday', 'actions'];
  patientList: Patient[] = [];
  dataSource = new MatTableDataSource<Patient>(this.patientList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public patientService: PatientService,
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

  openPatientEditModal() {
    const dialogRef = this.dialog.open(PatientEditModalComponent);

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
}
