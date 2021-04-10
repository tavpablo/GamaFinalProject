import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashComponent } from './dash.component';
import { BlocoContaComponent } from './bloco-conta/bloco-conta.component';
import { BlocoLancamentosComponent } from './bloco-lancamentos/bloco-lancamentos.component';
import { LancamentoComponent } from './bloco-lancamentos/lancamento/lancamento.component';


@NgModule({
  declarations: [
    DashComponent,
    BlocoContaComponent,
    BlocoLancamentosComponent,
    LancamentoComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashModule { }
