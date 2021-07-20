import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'cadastro-de-usuario',
    children: [
      {
        path: '',
        component: UsersRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
