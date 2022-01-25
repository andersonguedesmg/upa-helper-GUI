import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogSessionExpiredComponent } from './components/confirm-dialog-session-expired/confirm-dialog-session-expired.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ConfirmDialogComponent,
    ConfirmDialogSessionExpiredComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    NgSelectModule,
  ],
  exports: [NavbarComponent, FooterComponent, SidebarComponent],
})
export class SharedModule {}
