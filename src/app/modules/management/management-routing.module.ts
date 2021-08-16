import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { UsersRegisterComponent } from './pages/users-register/users-register.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'usuario/novo',
    children: [
      {
        path: '',
        component: UsersRegisterComponent,
      },
    ],
  },
  {
    path: 'perfil',
    children: [
      {
        path: '',
        component: UsersProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
