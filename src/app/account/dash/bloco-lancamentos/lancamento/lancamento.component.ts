import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.scss']
})

export class LancamentoComponent implements OnInit {

  @Input() titulo!: string;
  @Input() data!: Date;
  @Input() instituicao!: string;
  @Input() valor!: number;
 
  constructor() { }

  ngOnInit(): void {
  }

}
