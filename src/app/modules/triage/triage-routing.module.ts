import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriagesRegisterComponent } from './pages/triages-register/triages-register.component';
import { TriagesComponent } from './pages/triages/triages.component';

const routes: Routes = [
  {
    path: 'triagem',
    children: [
      {
        path: '',
        component: TriagesComponent,
      },
    ],
  },
  {
    path: 'cadastro-de-triagem',
    children: [
      {
        path: '',
        component: TriagesRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriageRoutingModule {}
