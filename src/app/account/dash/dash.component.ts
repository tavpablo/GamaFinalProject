import { Component } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { BaseComponent } from '../../shared/base/base.component';
import { Lancamento } from '../../shared/models/lancamento.model';
import { PlanoConta } from '../../shared/models/plano-conta.model';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})

export class DashComponent extends BaseComponent {

  saldoConta: number = 0;
  saldoTransacoes: number = 0;

  limiteDisponivel: number = 0;
  valorFatura: number = 0;

  lancamentos: Array<Lancamento> = [];

  ngOnInit(): void {

    this.gamaService.getDashboard('2021-01-01', '2021-04-30', this.sessao.login)
      .pipe(
        take(1),
        finalize(() => { this.loading = false; })
      )
      .subscribe(response => {

        console.log('Carregou dashboard.');
        
        this.saldoConta = response.contaBanco.saldo;
        response.contaBanco.lancamentos.forEach(l => { this.saldoTransacoes += l.valor; this.lancamentos.push(l); });

        this.limiteDisponivel = response.contaCredito.saldo;
        response.contaCredito.lancamentos.forEach(l => { this.valorFatura += l.valor; this.lancamentos.push(l); });

        this.saldoConta = 1945.50;
        this.saldoTransacoes = 400;
        this.limiteDisponivel = 15000;
        this.valorFatura = 1275.90;

        this.lancamentos.push(new Lancamento(999, 1, new Date(2021, 4, 10), "Crédito simulado", new PlanoConta(1, "Plano inicial", "pablo", true, "R"), "R", 3000));
        
        console.log(this.lancamentos);

      });

  }

}
