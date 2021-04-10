import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent extends BaseComponent {

  ngOnInit(): void {
  }

  naoDisponivel() {
    localStorage.setItem('GamaMessage', 'Funcionalidade não implementada (obs.: apesar de citada no documento não está totalmente briefada, a mesma não está mockada no figma).');
    const dialog = this._dialog.open(DialogComponent);
  }

}
