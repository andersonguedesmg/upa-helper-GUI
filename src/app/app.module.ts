import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdministrativeModule } from './modules/administrative/administrative.module';
import { MedicalCareModule } from './modules/medical-care/medical-care.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/services/interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AdministrativeModule,
    AuthModule,
    HomeModule,
    MedicalCareModule,
    SharedModule,
    NgSelectModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
