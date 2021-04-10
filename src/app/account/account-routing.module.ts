import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'dash',
  pathMatch: 'full',
}, {
  path: 'dash',
  loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
