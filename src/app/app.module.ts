import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { ErrorComponent } from './shared/error/error.component';

import { GamaBankService } from './shared/services/gama.service';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainModule } from './main/main.module';
import { AccountModule } from './account/account.module';

import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    MainModule,
    AccountModule
  ],
  providers: [HttpClient, GamaBankService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },{
      provide: LOCALE_ID,
      useValue: 'pt'
    }],
  bootstrap: [AppComponent] 
})
export class AppModule { }
