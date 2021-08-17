import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceFileRegisterComponent } from './pages/attendance/attendance-file-register/attendance-file-register.component';
import { AttendanceRegisterComponent } from './pages/attendance/attendance-register/attendance-register.component';
import { AttendanceComponent } from './pages/attendance/attendance/attendance.component';
import { PatientRegisterComponent } from './pages/patient/patient-register/patient-register.component';
import { PatientComponent } from './pages/patient/patient/patient.component';
import { WaitingRoomComponent } from './pages/reception/waiting-room/waiting-room.component';
import { TriageRegisterComponent } from './pages/triage/triage-register/triage-register.component';
import { TriageComponent } from './pages/triage/triage/triage.component';

const routes: Routes = [
  {
    path: 'pacientes',
    children: [
      {
        path: '',
        component: PatientComponent,
      },
    ],
  },
  {
    path: 'paciente/novo',
    children: [
      {
        path: '',
        component: PatientRegisterComponent,
      },
    ],
  },
  {
    path: 'atendimentos',
    children: [
      {
        path: '',
        component: AttendanceComponent,
      },
    ],
  },
  {
    path: 'atendimento/novo',
    children: [
      {
        path: '',
        component: AttendanceRegisterComponent,
      },
    ],
  },
  {
    path: 'atendimento/ficha',
    children: [
      {
        path: '',
        component: AttendanceFileRegisterComponent,
      },
    ],
  },
  {
    path: 'triagem',
    children: [
      {
        path: '',
        component: TriageComponent,
      },
    ],
  },
  {
    path: 'cadastro-de-triagem',
    children: [
      {
        path: '',
        component: TriageRegisterComponent,
      },
    ],
  },
  {
    path: 'sala-de-espera',
    children: [
      {
        path: '',
        component: WaitingRoomComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalCareRoutingModule {}
