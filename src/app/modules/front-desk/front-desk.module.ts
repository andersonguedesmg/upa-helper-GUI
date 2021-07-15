import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontDeskRoutingModule } from './front-desk-routing.module';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [PatientComponent, PatientRegisterComponent],
  imports: [
    CommonModule,
    FrontDeskRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AngularMaterialModule,
    NgSelectModule,
  ],
})
export class FrontDeskModule {}
