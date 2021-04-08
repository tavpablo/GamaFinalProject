import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoverypassComponent } from './pages/recoverypass/recoverypass.component';
import { ControleSessaoGuard } from './shared/base/controle-sessao.guard';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recoverypass', component: RecoverypassComponent },
  { path: 'dash', component: DashComponent, canActivate: [ControleSessaoGuard] },
  { path: '**', component: ErrorComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
