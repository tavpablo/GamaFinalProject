import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoverypassComponent } from './pages/recoverypass/recoverypass.component';
import { ErrorComponent } from './pages/error/error.component';
import { DashComponent } from './pages/dash/dash.component';
import { GamaBankService } from './services/gama.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskModule } from 'ngx-mask';

export const GAMA_API = environment.GAMA_API;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RecoverypassComponent,
    ErrorComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [HttpClient, GamaBankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
