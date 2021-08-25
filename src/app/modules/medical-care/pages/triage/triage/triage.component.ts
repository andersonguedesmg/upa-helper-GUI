import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Triage from '../../../models/triage.model';
import { TriageService } from '../../../services/triage.service';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.scss'],
})
export class TriageComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'cpf', 'cns', 'date', 'actions'];
  triageList: Triage[] = [];
  dataSource = new MatTableDataSource<Triage>(this.triageList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public triageService: TriageService) {}

  ngOnInit(): void {
    this.getTriages();
  }

  getTriages() {
    this.triageService.getTriages().subscribe((response) => {
      this.dataSource.data = response as Triage[];
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
