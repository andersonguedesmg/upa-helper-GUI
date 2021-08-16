import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { NotFoundComponent } from './modules/auth/pages/not-found/not-found.component';
import { AttendanceFileRegisterComponent } from './modules/front-desk/pages/attendance-file-register/attendance-file-register.component';
import { AttendanceRegisterComponent } from './modules/front-desk/pages/attendance-register/attendance-register.component';
import { AttendanceComponent } from './modules/front-desk/pages/attendance/attendance.component';
import { PatientRegisterComponent } from './modules/front-desk/pages/patient-register/patient-register.component';
import { PatientComponent } from './modules/front-desk/pages/patient/patient.component';
import { WaitingRoomComponent } from './modules/front-desk/pages/waiting-room/waiting-room.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { UsersProfileComponent } from './modules/management/pages/users-profile/users-profile.component';
import { UsersRegisterComponent } from './modules/management/pages/users-register/users-register.component';
import { UsersComponent } from './modules/management/pages/users/users.component';
import { TriagesRegisterComponent } from './modules/triage/pages/triages-register/triages-register.component';
import { TriagesComponent } from './modules/triage/pages/triages/triages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'usuarios',
    component: UsersComponent,
  },
  {
    path: 'usuario/novo',
    component: UsersRegisterComponent,
  },
  {
    path: 'perfil',
    component: UsersProfileComponent,
  },
  {
    path: 'pacientes',
    component: PatientComponent,
  },
  {
    path: 'paciente/novo',
    component: PatientRegisterComponent,
  },
  {
    path: 'atendimentos',
    component: AttendanceComponent,
  },
  {
    path: 'atendimento/novo',
    component: AttendanceRegisterComponent,
  },
  {
    path: 'atendimento/ficha',
    component: AttendanceFileRegisterComponent,
  },
  {
    path: 'sala-de-espera',
    component: WaitingRoomComponent,
  },
  {
    path: 'triagem',
    component: TriagesComponent,
  },
  {
    path: 'triagem/nova',
    component: TriagesRegisterComponent,
  },
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
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
