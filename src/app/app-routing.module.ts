import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './layouts/pages/authentication/authentication.component';
import { MasterPageComponent } from './layouts/pages/master-page/master-page.component';
import { DashboardComponent } from './modules/administrative/pages/dashboard/dashboard/dashboard.component';
import { UserProfileComponent } from './modules/administrative/pages/user/user-profile/user-profile.component';
import { UserRegisterComponent } from './modules/administrative/pages/user/user-register/user-register.component';
import { UserComponent } from './modules/administrative/pages/user/user/user.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { NotFoundComponent } from './modules/auth/pages/not-found/not-found.component';
import { AppointmentRegisterComponent } from './modules/medical-care/pages/appointment/appointment-register/appointment-register.component';
import { AppointmentComponent } from './modules/medical-care/pages/appointment/appointment/appointment.component';
import { AttendanceFileRegisterComponent } from './modules/medical-care/pages/attendance/attendance-file-register/attendance-file-register.component';
import { AttendanceRegisterComponent } from './modules/medical-care/pages/attendance/attendance-register/attendance-register.component';
import { AttendanceComponent } from './modules/medical-care/pages/attendance/attendance/attendance.component';
import { PatientRegisterComponent } from './modules/medical-care/pages/patient/patient-register/patient-register.component';
import { PatientComponent } from './modules/medical-care/pages/patient/patient/patient.component';
import { WaitingRoomComponent } from './modules/medical-care/pages/reception/waiting-room/waiting-room.component';
import { TriageRegisterComponent } from './modules/medical-care/pages/triage/triage-register/triage-register.component';
import { TriageComponent } from './modules/medical-care/pages/triage/triage/triage.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'colaboradores', component: UserComponent },
      { path: 'colaborador/novo', component: UserRegisterComponent },
      { path: 'perfil', component: UserProfileComponent },
      { path: 'pacientes', component: PatientComponent },
      { path: 'paciente/novo', component: PatientRegisterComponent },
      { path: 'atendimentos', component: AttendanceComponent },
      { path: 'atendimento/novo', component: AttendanceRegisterComponent },
      {
        path: 'atendimento/ficha/:id',
        component: AttendanceFileRegisterComponent,
      },
      { path: 'sala-de-espera', component: WaitingRoomComponent },
      { path: 'triagem', component: TriageComponent },
      { path: 'triagem/nova/:id', component: TriageRegisterComponent },
      { path: 'consulta', component: AppointmentComponent },
      { path: 'consulta/nova/:id', component: AppointmentRegisterComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
