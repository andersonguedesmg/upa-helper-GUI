import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalCareRoutingModule } from './medical-care-routing.module';
import { AttendanceComponent } from './pages/attendance/attendance/attendance.component';
import { AttendanceRegisterComponent } from './pages/attendance/attendance-register/attendance-register.component';
import { AttendanceFileRegisterComponent } from './pages/attendance/attendance-file-register/attendance-file-register.component';
import { PatientComponent } from './pages/patient/patient/patient.component';
import { PatientRegisterComponent } from './pages/patient/patient-register/patient-register.component';
import { WaitingRoomComponent } from './pages/reception/waiting-room/waiting-room.component';
import { TriageComponent } from './pages/triage/triage/triage.component';
import { TriageRegisterComponent } from './pages/triage/triage-register/triage-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { AppointmentComponent } from './pages/appointment/appointment/appointment.component';
import { AppointmentRegisterComponent } from './pages/appointment/appointment-register/appointment-register.component';
import { PatientEditModalComponent } from './components/patient-edit-modal/patient-edit-modal.component';
import { AttendanceUnknownModalComponent } from './components/attendance-unknown-modal/attendance-unknown-modal.component';

@NgModule({
  declarations: [
    AttendanceComponent,
    AttendanceRegisterComponent,
    AttendanceFileRegisterComponent,
    PatientComponent,
    PatientRegisterComponent,
    WaitingRoomComponent,
    TriageComponent,
    TriageRegisterComponent,
    AppointmentComponent,
    AppointmentRegisterComponent,
    PatientEditModalComponent,
    AttendanceUnknownModalComponent,
  ],
  imports: [
    CommonModule,
    MedicalCareRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AngularMaterialModule,
    NgSelectModule,
    NgxMaskModule.forChild(),
  ],
})
export class MedicalCareModule {}
