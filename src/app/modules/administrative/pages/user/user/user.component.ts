import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { UserEditModalComponent } from '../../../components/user-edit-modal/user-edit-modal.component';
import User from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'userType', 'cell', 'actions'];
  listUser: User[] = [];
  dataSource = new MatTableDataSource<User>(this.listUser);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsersForTable();
  }

  getUsersForTable() {
    this.userService.getUsersForTable().subscribe((response) => {
      this.dataSource.data = response as User[];
    });
  }

  openUserEditModal() {
    const dialogRef = this.dialog.open(UserEditModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteUser() {
    // if ('') {
    const title = `Deletar usuário`;
    const message = `Você tem certeza de que quer deletar esse usuário?`;
    const dialogData = new ConfirmDialogModel(title, message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult == true) {
        var request = null;
        // this.userService.updateUser(test, request).subscribe(() => {
        //   location.reload();
        // });
      }
    });
    // }
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
