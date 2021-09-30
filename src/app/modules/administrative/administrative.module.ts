import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { UserComponent } from './pages/user/user/user.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserComponent,
    UserRegisterComponent,
    UserProfileComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AngularMaterialModule,
    NgSelectModule,
    NgxMaskModule.forChild(),
  ],
})
export class AdministrativeModule {}
