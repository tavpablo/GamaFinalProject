import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full',
  }, {
    path: '',
    component: DashComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashRoutingModule { }
