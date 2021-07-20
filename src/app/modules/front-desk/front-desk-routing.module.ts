import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        component: PatientRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontDeskRoutingModule {}
