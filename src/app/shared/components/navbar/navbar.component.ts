import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CommonHelper } from '../../helpers/common.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() inputSideNav!: MatSidenav;
  userNameLogged = CommonHelper.getUserNameLogged();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
