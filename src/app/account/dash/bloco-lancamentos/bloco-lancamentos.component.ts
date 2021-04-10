import { Component, Input, OnInit } from '@angular/core';
import { Lancamento } from 'src/app/shared/models/lancamento.model';

@Component({
  selector: 'app-bloco-lancamentos',
  templateUrl: './bloco-lancamentos.component.html',
  styleUrls: ['./bloco-lancamentos.component.scss']
})

export class BlocoLancamentosComponent implements OnInit {

  @Input() lancamentos!: Lancamento[];

  ngOnInit(): void {
  
  }

}
