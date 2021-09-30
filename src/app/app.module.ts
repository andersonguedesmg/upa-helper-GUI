import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdministrativeModule } from './modules/administrative/administrative.module';
import { MedicalCareModule } from './modules/medical-care/medical-care.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/services/interceptor.service';
import { NgxMaskModule } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AuthInterceptorProviders } from './modules/auth/services/auth.interceptor';
import { LayoutsModule } from './layouts/layouts.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AdministrativeModule,
    AuthModule,
    MedicalCareModule,
    LayoutsModule,
    SharedModule,
    NgSelectModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    AuthInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
