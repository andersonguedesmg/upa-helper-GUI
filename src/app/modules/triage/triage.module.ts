import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriageRoutingModule } from './triage-routing.module';
import { TriagesComponent } from './pages/triages/triages.component';
import { TriagesRegisterComponent } from './pages/triages-register/triages-register.component';


@NgModule({
  declarations: [
    TriagesComponent,
    TriagesRegisterComponent
  ],
  imports: [
    CommonModule,
    TriageRoutingModule
  ]
})
export class TriageModule { }
