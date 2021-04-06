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
import { LoginService } from './pages/login/login.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

export const GAMA_API = 'https://accenture-java-desafio.herokuapp.com';

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
    ReactiveFormsModule

  ],
  providers: [HttpClient, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
