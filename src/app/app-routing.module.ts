import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { NotFoundComponent } from './modules/auth/pages/not-found/not-found.component';
import { PatientRegisterComponent } from './modules/front-desk/pages/patient-register/patient-register.component';
import { PatientComponent } from './modules/front-desk/pages/patient/patient.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { UsersRegisterComponent } from './modules/management/pages/users-register/users-register.component';
import { UsersComponent } from './modules/management/pages/users/users.component';

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
    path: 'usuario',
    component: UsersComponent,
  },
  {
    path: 'cadastro-de-usuario',
    component: UsersRegisterComponent,
  },
  {
    path: 'paciente',
    component: PatientComponent,
  },
  {
    path: 'cadastro-de-paciente',
    component: PatientRegisterComponent,
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
