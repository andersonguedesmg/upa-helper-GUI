import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { UserComponent } from './pages/user/user/user.component';

const routes: Routes = [
  {
    path: 'colaboradores',
    children: [
      {
        path: '',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'colaborador/novo',
    children: [
      {
        path: '',
        component: UserRegisterComponent,
      },
    ],
  },
  {
    path: 'perfil',
    children: [
      {
        path: '',
        component: UserProfileComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
