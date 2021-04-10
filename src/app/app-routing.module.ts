import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { ControleSessaoGuard } from './shared/base/controle-sessao.guard';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule) }, 
  { path: 'account', 
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule), 
    canActivate: [ControleSessaoGuard] },
  { path: '**', 
    component: ErrorComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
