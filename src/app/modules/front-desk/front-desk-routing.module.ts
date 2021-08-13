import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceRegisterComponent } from './pages/attendance-register/attendance-register.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';
import { PatientComponent } from './pages/patient/patient.component';

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
    path: 'cadastro-de-paciente',
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
    path: 'cadastro-de-atendimento',
    children: [
      {
        path: '',
        component: AttendanceRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontDeskRoutingModule {}
