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
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { AttendanceRegisterComponent } from './pages/attendance-register/attendance-register.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';
import { AttendanceFileRegisterComponent } from './pages/attendance-file-register/attendance-file-register.component';

@NgModule({
  declarations: [
    PatientComponent,
    PatientRegisterComponent,
    AttendanceComponent,
    AttendanceRegisterComponent,
    WaitingRoomComponent,
    AttendanceFileRegisterComponent,
  ],
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
