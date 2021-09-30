import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { UserProfileComponent } from './modules/administrative/pages/user/user-profile/user-profile.component';
import { UserRegisterComponent } from './modules/administrative/pages/user/user-register/user-register.component';
import { UserComponent } from './modules/administrative/pages/user/user/user.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { NotFoundComponent } from './modules/auth/pages/not-found/not-found.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
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
  { path: 'dashboard', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'colaboradores', component: UserComponent },
  { path: 'colaborador/novo', component: UserRegisterComponent },
  { path: 'perfil', component: UserProfileComponent },
  { path: 'pacientes', component: PatientComponent },
  { path: 'paciente/novo', component: PatientRegisterComponent },
  { path: 'atendimentos', component: AttendanceComponent },
  { path: 'atendimento/novo', component: AttendanceRegisterComponent },
  { path: 'atendimento/ficha/:id', component: AttendanceFileRegisterComponent },
  { path: 'sala-de-espera', component: WaitingRoomComponent },
  { path: 'triagem', component: TriageComponent },
  { path: 'triagem/nova/:id', component: TriageRegisterComponent },
  { path: 'consulta', component: AppointmentComponent },
  { path: 'consulta/nova/:id', component: AppointmentRegisterComponent },
];

const defaultRoutes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot([...routes, ...defaultRoutes], {
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...routes, ...defaultRoutes]);
  }
}
