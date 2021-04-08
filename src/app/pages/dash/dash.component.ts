import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { Sessao } from 'src/app/shared/models/sessao.model';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent extends BaseComponent {

  sessao!: Sessao;

  ngOnInit(): void {

    this.sessao = this.getSessao();

  }

}
