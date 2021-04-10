import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloco-conta',
  templateUrl: './bloco-conta.component.html',
  styleUrls: ['./bloco-conta.component.scss']
})

export class BlocoContaComponent implements OnInit {

  @Input() tipoConta!: string;

  @Input() saldoConta!: number;
  @Input() saldoTransacoes!: number;

  @Input() limiteDisponivel!: number;
  @Input() valorFatura!: number;

  ngOnInit(): void {

  }

}
