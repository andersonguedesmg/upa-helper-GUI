import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  currentYear: any;

  constructor() {}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear() {
    let currentTime = new Date();
    this.currentYear = currentTime.getFullYear();
  }
}
