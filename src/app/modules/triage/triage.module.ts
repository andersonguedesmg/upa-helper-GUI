import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriageRoutingModule } from './triage-routing.module';
import { TriagesComponent } from './pages/triages/triages.component';
import { TriagesRegisterComponent } from './pages/triages-register/triages-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TriagesComponent, TriagesRegisterComponent],
  imports: [
    CommonModule,
    TriageRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AngularMaterialModule,
    NgSelectModule,
  ],
})
export class TriageModule {}
