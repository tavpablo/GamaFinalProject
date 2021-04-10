import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'dash',
  pathMatch: 'full',
}, {
  path: '',
  component: AccountComponent,
  children: [
    { path: 'dash', component: DashComponent }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
