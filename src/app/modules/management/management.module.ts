import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { UsersRegisterComponent } from './pages/users-register/users-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [UsersComponent, UsersRegisterComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    AngularMaterialModule,
    NgSelectModule,
  ],
})
export class ManagementModule {}
